#!/bin/bash
set -euo pipefail
cd /opt/banschick-toolset

TS=$(date +%Y%m%d-%H%M%S)
echo "=== backup configs ($TS) ==="
cp docker-compose.yml "docker-compose.yml.bak.$TS"
cp caddy/Caddyfile "caddy/Caddyfile.bak.$TS"

# normalize ownership of uploaded site files
chown -R root:root sites/portfolio

# 1) Add the portfolio volume mount to the caddy service (idempotent)
if grep -q "sites/portfolio:/srv/portfolio" docker-compose.yml; then
  echo "volume mount already present — skipping"
else
  echo "=== inserting volume mount after Caddyfile mount ==="
  python3 - <<'PY'
path = "docker-compose.yml"
s = open(path).read()
anchor = "      - ./caddy/Caddyfile:/etc/caddy/Caddyfile:ro\n"
add = "      - ./sites/portfolio:/srv/portfolio:ro\n"
assert anchor in s, "anchor line not found!"
s = s.replace(anchor, anchor + add, 1)
open(path, "w").write(s)
print("inserted")
PY
fi

# 2) Add the portfolio site block to the Caddyfile (idempotent)
if grep -q "portfolio.banschick.com" caddy/Caddyfile; then
  echo "Caddyfile block already present — skipping"
else
  echo "=== appending portfolio site block ==="
  cat >> caddy/Caddyfile <<'EOF'

# ──────────────────────────────────────────────────────────────────────────
# PORTFOLIO — portfolio.banschick.com → static site served by Caddy
# ──────────────────────────────────────────────────────────────────────────
# Static export (Next.js) mounted at /srv/portfolio. Caddy auto-provisions
# TLS via Let's Encrypt (HTTP-01 passes through Cloudflare's proxy).
# ──────────────────────────────────────────────────────────────────────────
portfolio.banschick.com {
	root * /srv/portfolio
	encode gzip zstd
	try_files {path} {path}/ /index.html
	file_server

	header {
		X-Content-Type-Options "nosniff"
		X-Frame-Options "SAMEORIGIN"
		X-XSS-Protection "1; mode=block"
		Referrer-Policy "strict-origin-when-cross-origin"
		Strict-Transport-Security "max-age=31536000; includeSubDomains"
		-Server
	}

	log {
		output file /data/logs/portfolio_access.log {
			roll_size 10mb
			roll_keep 5
		}
	}
}
EOF
fi

# 3) Validate the new Caddyfile inside the running caddy container
#    (the Caddyfile is a bind mount, so edits are already visible inside it)
echo "=== validating Caddyfile ==="
docker compose exec -T caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile

# 4) Recreate caddy to pick up the new volume mount + config
echo "=== recreating caddy container ==="
docker compose up -d caddy

echo "=== done; caddy status ==="
sleep 3
docker ps --format 'table {{.Names}}\t{{.Status}}' | grep -E 'NAMES|caddy'
