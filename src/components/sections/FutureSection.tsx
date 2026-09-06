import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { FUTURE_DREAMS } from '@/content';

export function FutureSection() {
  return (
    <section id="future" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={50} shootingStars />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(245,66,111,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <Reveal>
          <h2 className="cinematic-heading mb-4 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            I still have so much life to live with you.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mb-12 text-center font-serif text-xl text-blush-100/70 sm:text-2xl">
            Things I want us to do...
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {FUTURE_DREAMS.map((dream, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-white/5">
                <span className="text-2xl transition-transform group-hover:scale-125">
                  {dream.icon}
                </span>
                <p className="text-sm text-white/70 sm:text-base">{dream.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 text-center">
            <p className="font-serif text-xl text-white/60 sm:text-2xl">And most importantly...</p>
            <p className="mt-4 cinematic-heading text-3xl text-gradient-romance sm:text-4xl md:text-5xl text-shadow-glow">
              I want to grow old with you.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
