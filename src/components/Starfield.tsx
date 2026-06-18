"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport animated starfield rendered to a fixed canvas behind all
 * content. Three parallax layers of twinkling stars drift slowly upward,
 * with the occasional shooting star. Honors prefers-reduced-motion by
 * painting a single static frame.
 */
type Star = {
  x: number;
  y: number;
  r: number;
  baseA: number;
  tw: number;
  phase: number;
  vy: number;
  color: string;
};

type Shooting = {
  x: number;
  y: number;
  len: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
};

const STAR_COLORS = [
  "255,255,255",
  "255,255,255",
  "190,210,255", // blue-white
  "210,180,255", // violet
  "150,230,255", // cyan
];

export default function Starfield() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let stars: Star[] = [];
    let shooting: Shooting | null = null;
    let raf = 0;
    let nextShoot = 0;
    let t = 0;

    const build = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with screen area; cap for perf.
      const count = Math.min(260, Math.floor((w * h) / 7000));
      stars = Array.from({ length: count }, () => {
        const depth = Math.random(); // 0 = far, 1 = near
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.4 + depth * 1.4,
          baseA: 0.25 + depth * 0.6,
          tw: 0.4 + Math.random() * 1.6,
          phase: Math.random() * Math.PI * 2,
          vy: 0.02 + depth * 0.14, // parallax: near stars drift faster
          color: STAR_COLORS[(Math.random() * STAR_COLORS.length) | 0],
        };
      });
    };

    const drawStar = (s: Star, a: number) => {
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.color},${a})`;
      ctx.fill();
      if (s.r > 1.1) {
        // soft halo for the brighter/nearer stars
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${a * 0.12})`;
        ctx.fill();
      }
    };

    const frame = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      for (const s of stars) {
        const a = reduce
          ? s.baseA
          : s.baseA * (0.55 + 0.45 * Math.sin(t * 0.02 * s.tw + s.phase));
        drawStar(s, Math.max(0, a));
        if (!reduce) {
          s.y -= s.vy;
          if (s.y < -2) {
            s.y = h + 2;
            s.x = Math.random() * w;
          }
        }
      }

      if (!reduce) {
        // Shooting stars, occasionally.
        if (!shooting && t > nextShoot) {
          const startX = Math.random() * w * 0.6;
          const startY = Math.random() * h * 0.4;
          const speed = 6 + Math.random() * 4;
          shooting = {
            x: startX,
            y: startY,
            len: 80 + Math.random() * 120,
            vx: speed,
            vy: speed * (0.4 + Math.random() * 0.3),
            life: 0,
            ttl: 60 + Math.random() * 30,
          };
          nextShoot = t + 320 + Math.random() * 520;
        }
        if (shooting) {
          const s = shooting;
          s.life += 1;
          s.x += s.vx;
          s.y += s.vy;
          const prog = s.life / s.ttl;
          const alpha = Math.sin(prog * Math.PI) * 0.9;
          const ang = Math.atan2(s.vy, s.vx);
          const tailX = s.x - Math.cos(ang) * s.len;
          const tailY = s.y - Math.sin(ang) * s.len;
          const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
          grad.addColorStop(0, `rgba(200,225,255,${alpha})`);
          grad.addColorStop(1, "rgba(200,225,255,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
          if (s.life > s.ttl || s.x > w + s.len || s.y > h + s.len) {
            shooting = null;
          }
        }
        raf = requestAnimationFrame(frame);
      }
    };

    build();
    nextShoot = 180;
    frame();

    const onResize = () => {
      build();
      if (reduce) frame();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-full w-full"
      style={{ zIndex: 1 }}
    />
  );
}
