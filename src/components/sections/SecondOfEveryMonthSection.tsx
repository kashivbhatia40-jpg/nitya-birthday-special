import { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { FloatingHearts } from '../FloatingHearts';

export function SecondOfEveryMonthSection() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => setHighlight(e.isIntersecting));
      },
      { threshold: 0.4 }
    );
    const el = document.getElementById('second-month');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Calendar grid — 02 FEB highlighted
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
  ];

  return (
    <section
      id="second-month"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24"
    >
      <StarField count={60} shootingStars />
      {highlight && <FloatingHearts count={10} />}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(245,66,111,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="cinematic-heading text-6xl text-gradient-romance sm:text-7xl md:text-8xl">
            02 ❤️
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="font-serif text-xl leading-relaxed text-blush-100/80 sm:text-2xl">
            Every 2nd of the month was,
            <br />
            is,
            <br />
            and will always be
            <br />
            the best day of the month.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg text-white/50 sm:text-xl">And 2 February?</p>
        </Reveal>

        <Reveal delay={600}>
          <p className="cinematic-heading text-3xl text-gradient-gold sm:text-4xl md:text-5xl text-shadow-glow">
            THE BESTEST DAY OF THE YEAR. ❤️
          </p>
        </Reveal>

        {/* Calendar animation */}
        <Reveal delay={800}>
          <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6">
            {months.map((m, i) => (
              <div
                key={m}
                className={`flex aspect-square w-16 flex-col items-center justify-center rounded-xl text-xs transition-all duration-500 sm:w-20 ${
                  i === 1
                    ? 'glass-pink scale-110 text-blush-100 shadow-glow-pulse'
                    : 'glass text-white/40'
                }`}
                style={{
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <span className="text-[10px] font-medium tracking-wider">{m}</span>
                <span
                  className={`mt-0.5 font-serif text-lg ${
                    i === 1 ? 'text-blush-300' : 'text-white/30'
                  }`}
                >
                  02
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
