import { useState } from 'react';
import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { X, Mail } from 'lucide-react';
import { OPEN_WHEN } from '@/content';

export function OpenWhenSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="letters" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={30} />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <h2 className="cinematic-heading mb-4 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            For the days when you need me.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-12 text-center text-white/50">
            Open these whenever you need to hear from me.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {OPEN_WHEN.map((envelope, i) => (
            <Reveal key={i} delay={i * 80}>
              <button
                onClick={() => setOpenIndex(i)}
                className="glass group flex w-full items-center gap-4 rounded-2xl p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:bg-white/5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blush-500/10 text-2xl">
                  {envelope.icon}
                </div>
                <div className="flex-1">
                  <p className="font-serif text-lg text-blush-100">{envelope.title}</p>
                  <p className="mt-0.5 text-xs text-white/40">Tap to open</p>
                </div>
                <Mail
                  size={18}
                  className="text-blush-400/40 transition-transform group-hover:translate-x-1"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Letter modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-blush-400/20 bg-midnight-800/95 p-8 shadow-2xl no-scrollbar"
            onClick={(e) => e.stopPropagation()}
            style={{ boxShadow: '0 0 60px rgba(245,66,111,0.15)' }}
          >
            <button
              onClick={() => setOpenIndex(null)}
              className="absolute right-4 top-4 rounded-full bg-white/5 p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="mb-6 flex items-center gap-3">
              <span className="text-3xl">{OPEN_WHEN[openIndex].icon}</span>
              <h3 className="font-serif text-xl text-blush-100">{OPEN_WHEN[openIndex].title}</h3>
            </div>

            <div className="space-y-4">
              {OPEN_WHEN[openIndex].letter.split('\n').map((line, i) => (
                <p
                  key={i}
                  className="text-sm leading-relaxed text-white/70 sm:text-base"
                  style={{
                    animation: `fadeUp 0.6s ease-out ${i * 100}ms both`,
                  }}
                >
                  {line || '\u00A0'}
                </p>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-right font-serif text-base text-blush-200/60">
              — Always yours ❤️
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
