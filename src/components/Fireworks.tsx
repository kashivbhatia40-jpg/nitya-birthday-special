import { useEffect, useRef, useState } from 'react';

interface Firework {
  x: number;
  y: number;
  color: string;
  particles: { angle: number; distance: number; delay: number }[];
}

const COLORS = [
  '#ff6f93',
  '#ffc9d6',
  '#f5d98b',
  '#ffffff',
  '#ffa3bc',
  '#d4a94f',
];

/**
 * Canvas-based fireworks. Call via the `trigger` ref or mount with
 * `active=true`. Particles are drawn with requestAnimationFrame.
 */
export function Fireworks({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!active) return;
    setShow(true);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      color: string;
      size: number;
    };

    const particles: Particle[] = [];
    let raf = 0;

    const launch = () => {
      const fw: Firework = {
        x: Math.random() * width * 0.7 + width * 0.15,
        y: Math.random() * height * 0.4 + height * 0.15,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        particles: Array.from({ length: 40 }, (_, i) => ({
          angle: (i / 40) * Math.PI * 2,
          distance: Math.random() * 80 + 60,
          delay: Math.random() * 0.3,
        })),
      };

      fw.particles.forEach((p) => {
        const speed = (p.distance / 60) * 2;
        particles.push({
          x: fw.x,
          y: fw.y,
          vx: Math.cos(p.angle) * speed,
          vy: Math.sin(p.angle) * speed,
          life: 0,
          maxLife: 60 + Math.random() * 20,
          color: fw.color,
          size: Math.random() * 2 + 1,
        });
      });
    };

    let lastLaunch = 0;
    const tick = (time: number) => {
      ctx.fillStyle = 'rgba(5, 3, 16, 0.15)';
      ctx.fillRect(0, 0, width, height);

      if (time - lastLaunch > 600 + Math.random() * 400) {
        launch();
        lastLaunch = time;
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // gravity
        p.vx *= 0.99;
        p.vy *= 0.99;

        const alpha = 1 - p.life / p.maxLife;
        if (alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [active]);

  if (!show) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[90] h-full w-full"
      aria-hidden="true"
    />
  );
}
