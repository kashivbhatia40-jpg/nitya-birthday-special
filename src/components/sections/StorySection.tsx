import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { TIMELINE } from '@/content';

export function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={50} />

      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal>
          <h2 className="cinematic-heading mb-16 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            Somehow, Instagram brought me to you.
          </h2>
        </Reveal>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blush-400/40 via-blush-400/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {TIMELINE.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* dot */}
                  <div className="absolute left-4 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-blush-400 shadow-glow-pulse sm:left-1/2" />

                  {/* spacer for desktop alternating layout */}
                  <div className="hidden w-1/2 sm:block" />

                  <div className="ml-12 flex-1 sm:ml-0 sm:w-1/2 sm:px-8">
                    <div className="glass rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                      <span className="font-serif text-3xl text-blush-400/60">{item.step}</span>
                      <h3 className="mt-2 font-serif text-xl text-blush-100 sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
                        {item.text}
                      </p>
                      {item.extra && (
                        <p className="mt-3 font-serif text-base italic text-blush-200/70 sm:text-lg">
                          {item.extra}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
