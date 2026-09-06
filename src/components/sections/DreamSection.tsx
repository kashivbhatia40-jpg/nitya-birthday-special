import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { FloatingHearts } from '../FloatingHearts';

export function DreamSection() {
  return (
    <section
      id="dream"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24"
    >
      <StarField count={80} shootingStars />
      <FloatingHearts count={6} />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(30,20,80,0.3) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="cinematic-heading mb-10 text-4xl text-gradient-romance sm:text-5xl md:text-6xl">
            One day...
          </h2>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              I want the day when you come to Jawalaji,
              <br />
              our families are together,
              <br />
              everything feels peaceful,
              <br />
              and somehow, in the middle of all of it,
              <br />
              we still find our own little space.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <p className="font-serif text-2xl text-blush-100/90 sm:text-3xl">Just you and me.</p>
          </Reveal>

          <Reveal delay={900}>
            <p className="font-serif text-2xl text-blush-100/90 sm:text-3xl">Together.</p>
          </Reveal>

          <Reveal delay={1200}>
            <p className="font-serif text-xl italic text-white/50 sm:text-2xl">
              Like we always wanted.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
