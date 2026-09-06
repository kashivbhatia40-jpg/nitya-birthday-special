import { Reveal } from '../Reveal';
import { StarField } from '../StarField';

export function ChangeSection() {
  return (
    <section id="change" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={30} />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <h2 className="cinematic-heading mb-10 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            You changed me.
          </h2>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Nitya,
              <br />I want you to know something.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              Being with you has made me more loyal,
              <br />
              more serious,
              <br />
              and more mature.
            </p>
          </Reveal>

          <Reveal delay={600}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              You helped me become a better version of myself.
            </p>
          </Reveal>

          <Reveal delay={800}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              I'm thankful for the person you helped me become.
            </p>
          </Reveal>

          <Reveal delay={1000}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              You didn't just become a part of my life.
            </p>
          </Reveal>

          <Reveal delay={1200}>
            <p className="font-serif text-lg italic text-blush-100/80 sm:text-xl">
              You changed the way I look at love,
              <br />
              commitment,
              <br />
              and my future.
            </p>
          </Reveal>

          <Reveal delay={1400}>
            <p className="mt-6 font-serif text-xl text-gradient-romance sm:text-2xl">
              I'll always be grateful for that.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
