import { useState } from 'react';
import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { FloatingHearts } from '../FloatingHearts';
import { Heart, X } from 'lucide-react';
import { BIG_LETTER } from '@/content';

export function BigLetterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="letter" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={40} />
      <FloatingHearts count={6} />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
        {!open ? (
          <>
            <Reveal>
              <div className="group relative">
                {/* Envelope */}
                <div className="relative mx-auto h-56 w-80 max-w-full transition-transform duration-500 group-hover:scale-105 sm:h-64 sm:w-96">
                  {/* Envelope body */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blush-700/40 to-midnight-700/60 shadow-2xl ring-1 ring-blush-400/20" />
                  {/* Envelope flap */}
                  <div
                    className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-blush-600/30 to-transparent"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                    }}
                  />
                  {/* Wax seal */}
                  <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blush-500 to-blush-700 shadow-lg ring-2 ring-blush-300/30">
                    <Heart size={24} className="fill-white/90 text-white" />
                  </div>
                  {/* Text on envelope */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <p className="font-serif text-lg text-blush-100 sm:text-xl">
                      For My Baby Panda ❤️
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <button
                onClick={() => setOpen(true)}
                className="group mt-8 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blush-500/20 to-blush-400/10 px-8 py-4 text-lg font-medium text-blush-100 ring-1 ring-blush-400/30 transition-all duration-500 hover:scale-105 hover:ring-blush-400/50 active:scale-95"
              >
                <Heart
                  size={20}
                  className="text-blush-400 transition-transform group-hover:scale-125"
                />
                Open My Heart
              </button>
            </Reveal>
          </>
        ) : (
          <Reveal>
            <div className="w-full text-left">
              <div className="mb-6 text-center">
                <Heart size={32} className="mx-auto fill-blush-400 text-blush-400" />
              </div>
              <div className="space-y-4">
                {BIG_LETTER.split('\n').map((line, i) => {
                  const isHeading = line.includes('Happy Birthday') && i < 10;
                  const isSignature = line.includes('— Your idiot');
                  return (
                    <p
                      key={i}
                      className={
                        isHeading
                          ? 'font-serif text-2xl text-gradient-romance sm:text-3xl'
                          : isSignature
                          ? 'mt-6 text-right font-serif text-xl text-blush-200/80 sm:text-2xl'
                          : line.trim() === ''
                          ? 'h-4'
                          : 'text-sm leading-relaxed text-white/70 sm:text-base'
                      }
                      style={{
                        animation: `fadeUp 0.5s ease-out ${Math.min(i * 30, 600)}ms both`,
                      }}
                    >
                      {line || '\u00A0'}
                    </p>
                  );
                })}
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm text-white/60 transition hover:text-blush-100"
                >
                  <X size={16} />
                  Close
                </button>
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
