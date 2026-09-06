import { useState } from 'react';
import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { Heart } from 'lucide-react';
import { REASONS } from '@/content';

export function ReasonsSection() {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>([]);

  const handleReveal = () => {
    if (index < REASONS.length) {
      setRevealed((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });
      setIndex((i) => i + 1);
    }
  };

  const allRevealed = index >= REASONS.length;

  return (
    <section id="reasons" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={40} />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <h2 className="cinematic-heading mb-4 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            Reasons I Love Nitya
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-10 text-center text-white/50">
            Every click is a piece of my heart.
          </p>
        </Reveal>

        {/* Revealed reasons */}
        <div className="space-y-3">
          {REASONS.slice(0, index).map((reason, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="glass-pink flex items-start gap-3 rounded-2xl p-5 animate-fade-up">
                <Heart size={18} className="mt-0.5 shrink-0 fill-blush-400 text-blush-400" />
                <p className="text-sm leading-relaxed text-white/80 sm:text-base">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Button */}
        <div className="mt-8 flex flex-col items-center gap-4">
          {!allRevealed ? (
            <button
              onClick={handleReveal}
              className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blush-500/20 to-blush-400/10 px-8 py-4 text-lg font-medium text-blush-100 ring-1 ring-blush-400/30 transition-all duration-500 hover:scale-105 hover:ring-blush-400/50 active:scale-95"
            >
              <Heart
                size={18}
                className="text-blush-400 transition-transform group-hover:scale-125"
              />
              Give me a reason ❤️
            </button>
          ) : (
            <Reveal>
              <p className="font-serif text-xl italic text-blush-100/80 sm:text-2xl">
                And honestly...
                <br />I could keep going.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
