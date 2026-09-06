import { useState, useEffect } from 'react';
import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { FloatingHearts } from '../FloatingHearts';
import { Fireworks } from '../Fireworks';

const FINALE_LINES = [
  { text: 'Wait...', className: 'text-2xl text-white/50 sm:text-3xl', delay: 0 },
  {
    text: 'I still have one last thing to say.',
    className: 'text-lg text-white/40 sm:text-xl',
    delay: 1500,
  },
  {
    text: 'Happy Birthday, Nitya ❤️',
    className: 'text-4xl text-gradient-romance sm:text-5xl md:text-6xl text-shadow-glow',
    delay: 3500,
  },
  { text: '8 September 2026', className: 'text-sm tracking-[0.3em] text-white/40', delay: 5500 },
  {
    text: "My wish isn't for one perfect year.",
    className: 'text-base text-white/60 sm:text-lg',
    delay: 7000,
  },
  {
    text: 'My wish is for many imperfect, beautiful years...\nas long as I get to spend them with you.',
    className: 'font-serif text-lg text-blush-100/80 sm:text-xl',
    delay: 9000,
  },
  {
    text: "Don't ever forget how loved you are.",
    className: 'text-base text-white/60 sm:text-lg',
    delay: 11000,
  },
  {
    text: 'Happy Birthday, My Baby Panda. 🐼❤️',
    className: 'cinematic-heading text-3xl text-gradient-romance sm:text-4xl md:text-5xl text-shadow-glow',
    delay: 13000,
  },
];

export function FinaleSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [fireworks, setFireworks] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    if (!sectionVisible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    FINALE_LINES.forEach((line, i) => {
      timers.push(
        setTimeout(() => setVisibleCount(i + 1), line.delay + 500)
      );
    });
    timers.push(setTimeout(() => setFireworks(true), 14500));

    return () => timers.forEach(clearTimeout);
  }, [sectionVisible]);

  return (
    <section
      id="finale"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24"
    >
      <StarField count={100} shootingStars />
      <Fireworks active={fireworks} />
      {fireworks && <FloatingHearts count={15} />}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(245,66,111,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <div
          ref={(el) => {
            if (!el) return;
            const observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((e) => {
                  if (e.isIntersecting) {
                    setSectionVisible(true);
                    observer.disconnect();
                  }
                });
              },
              { threshold: 0.3 }
            );
            observer.observe(el);
          }}
          className="flex flex-col gap-6"
        >
          {FINALE_LINES.slice(0, visibleCount).map((line, i) => (
            <p
              key={i}
              className={`whitespace-pre-line transition-all duration-1000 ${line.className}`}
              style={{
                animation: 'fadeUp 1s ease-out both',
              }}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
