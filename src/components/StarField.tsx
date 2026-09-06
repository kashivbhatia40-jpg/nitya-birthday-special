import { useEffect, useRef, useMemo } from 'react';

interface StarFieldProps {
  count?: number;
  className?: string;
  shootingStars?: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

/**
 * Pure-CSS star field rendered as absolutely-positioned divs.
 * Stars twinkle via the `animate-twinkle` keyframe; a few drift slowly.
 */
export function StarField({ count = 80, className = '', shootingStars = false }: StarFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, [count]);

  // Occasional shooting star
  useEffect(() => {
    if (!shootingStars || !containerRef.current) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const interval = setInterval(() => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.top = `${Math.random() * 40}%`;
      star.style.left = `${Math.random() * 70}%`;
      containerRef.current?.appendChild(star);
      setTimeout(() => star.remove(), 1500);
    }, 5000 + Math.random() * 4000);

    return () => clearInterval(interval);
  }, [shootingStars]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            boxShadow: `0 0 ${s.size * 2}px rgba(255,255,255,0.5)`,
          }}
        />
      ))}
    </div>
  );
}
