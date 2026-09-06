import { useMemo } from 'react';

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

interface Heart {
  left: number;
  delay: number;
  duration: number;
  size: number;
  emoji: string;
}

const HEART_EMOJIS = ['❤️', '🤍', '💗'];

/**
 * Subtle floating hearts that drift upward. Used sparingly in
 * selected sections only — not site-wide.
 */
export function FloatingHearts({ count = 12, className = '' }: FloatingHeartsProps) {
  const hearts = useMemo<Heart[]>(() => {
    return Array.from({ length: count }, () => ({
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 6,
      size: Math.random() * 0.6 + 0.8,
      emoji: HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)],
    }));
  }, [count]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {hearts.map((h, i) => (
        <span
          key={i}
          className="absolute bottom-0"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}rem`,
            animation: `floatHeart ${h.duration}s ease-in ${h.delay}s infinite`,
          }}
        >
          {h.emoji}
        </span>
      ))}
    </div>
  );
}
