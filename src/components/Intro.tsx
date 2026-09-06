import { useEffect, useState } from 'react';
import { StarField } from './StarField';
import { Heart } from 'lucide-react';

interface IntroProps {
  onEnter: () => void;
}

const INTRO_LINES = [
  { text: '8 September 2026', className: 'text-sm tracking-[0.3em] text-white/40' },
  { text: 'Hey Nitya...', className: 'text-3xl sm:text-4xl text-white/90' },
  { text: 'I made a little universe for you.', className: 'text-xl sm:text-2xl text-blush-100' },
  {
    text: 'Because one birthday message was never going to be enough.',
    className: 'text-base sm:text-lg text-white/50',
  },
];

export function Intro({ onEnter }: IntroProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    INTRO_LINES.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleLines(i + 1), 800 + i * 1400)
      );
    });
    timers.push(setTimeout(() => setShowButton(true), 800 + INTRO_LINES.length * 1400));
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    setExiting(true);
    setTimeout(onEnter, 900);
  };

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-midnight-950 transition-opacity duration-700 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <StarField count={120} shootingStars />

      {/* subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(245,66,111,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex max-w-xl flex-col items-center gap-6 px-6 text-center">
        {INTRO_LINES.map((line, i) => (
          <p
            key={i}
            className={`cinematic-heading transition-all duration-1000 ${
              i < visibleLines
                ? 'translate-y-0 opacity-100'
                : 'translate-y-4 opacity-0'
            } ${line.className}`}
          >
            {line.text}
          </p>
        ))}

        {showButton && (
          <button
            onClick={handleEnter}
            className="group mt-4 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blush-500/20 to-blush-400/10 px-8 py-4 text-lg font-medium text-blush-100 ring-1 ring-blush-400/30 transition-all duration-500 hover:scale-105 hover:from-blush-500/30 hover:to-blush-400/20 hover:text-white hover:ring-blush-400/50 active:scale-95 animate-fade-up"
            style={{ animationDuration: '0.8s' }}
          >
            ENTER MY HEART
            <Heart
              size={20}
              className="text-blush-400 transition-transform group-hover:scale-125"
            />
          </button>
        )}
      </div>
    </div>
  );
}
