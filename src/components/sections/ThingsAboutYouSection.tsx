import { Reveal } from '../Reveal';
import { THINGS_ABOUT_YOU } from '@/content';

export function ThingsAboutYouSection() {
  return (
    <section id="memories" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <h2 className="cinematic-heading mb-4 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            Things that are so YOU.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-12 text-center text-white/50">
            The little things I fell in love with.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {THINGS_ABOUT_YOU.map((card, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/5">
                <div className="mb-3 text-3xl">{card.icon}</div>
                <h3 className="font-serif text-xl text-blush-100 sm:text-2xl">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                  {card.text}
                </p>
                {card.extra && (
                  <p className="mt-2 text-sm italic text-blush-200/60">{card.extra}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
