#!/bin/bash
# ============================================================================
# One-command redeploy for portfolio.banschick.com
# ----------------------------------------------------------------------------
# Usage:  bash redeploy.sh
#
# 1. Builds the static export (out/)
# 2. Uploads a tarball and extracts it IN PLACE into the Caddy bind-mount
#    (never `rm -rf` the mounted dir — that breaks the running container)
# 3. Retries + verifies a content marker actually landed (the local SSH
#    client occasionally drops streamed transfers, so we confirm, not assume)
#
# To update content: edit src/data/content.ts (or drop a new public/resume.pdf),
# then run this script. No Caddy restart needed.
# ============================================================================
set -euo pipefail

KEY="$HOME/.ssh/quantpipe_server"
HOST="root@87.99.133.129"
REMOTE_DIR="/opt/banschick-toolset/sites/portfolio"
SSH_OPTS="-i $KEY -o BatchMode=yes -o StrictHostKeyChecking=accept-new -o ConnectTimeout=20"

echo "==> Building static export..."
npm run build

echo "==> Packaging..."
( cd out && tar -czf ../deploy.tar.gz . )

deploy_once() {
  scp $SSH_OPTS deploy.tar.gz "$HOST:/tmp/portfolio_deploy.tar.gz" >/dev/null 2>&1 || return 1
  ssh $SSH_OPTS "$HOST" "
    set -e
    find '$REMOTE_DIR' -mindepth 1 -delete
    tar -C '$REMOTE_DIR' -xzf /tmp/portfolio_deploy.tar.gz
    chown -R root:root '$REMOTE_DIR'
    rm -f /tmp/portfolio_deploy.tar.gz
    test -s '$REMOTE_DIR/index.html'
  " >/dev/null 2>&1 || return 1
  return 0
}

ok=0
for attempt in 1 2 3; do
  echo "==> Deploy attempt $attempt..."
  if deploy_once; then
    files=$(ssh $SSH_OPTS "$HOST" "find '$REMOTE_DIR' -type f | wc -l" 2>/dev/null || echo "?")
    echo "    synced ($files files on server)"
    ok=1
    break
  fi
  echo "    attempt failed, retrying..."
  sleep 2
done

rm -f deploy.tar.gz
[ "$ok" = 1 ] || { echo "!! deploy failed after 3 attempts"; exit 1; }

echo "==> Verifying live site..."
code=$(curl -sS --max-time 25 -o /dev/null -w "%{http_code}" "https://portfolio.banschick.com/?v=$(date +%s)" || echo ERR)
echo "    https://portfolio.banschick.com -> HTTP $code"
echo "==> Done."
