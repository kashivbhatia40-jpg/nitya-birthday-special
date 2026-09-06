import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { Lightbox } from '../Lightbox';
import { PHOTOS } from '@/content';

export function MetYouSection() {
  return (
    <section id="met-you" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={40} />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 70% 50%, rgba(245,66,111,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <h2 className="cinematic-heading mb-12 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            I still remember that day.
          </h2>
        </Reveal>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <Lightbox
              src={PHOTOS.laughing}
              fallbackSrc={PHOTOS.laughingFallback}
              alt="The day we first met"
              caption="The day everything became real"
              className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl"
            />
          </Reveal>

          <div className="flex flex-col gap-5">
            {[
              'I was waiting for you at Bestech.',
              'Then you came out of the Wagon R.',
              'You looked at me.',
              'And then we finally stood in front of each other.',
              'Our first eye contact. Our first handshake.',
            ].map((line, i) => (
              <Reveal key={i} delay={i * 150}>
                <p className="text-base leading-relaxed text-white/70 sm:text-lg">{line}</p>
              </Reveal>
            ))}

            <Reveal delay={800}>
              <p className="font-serif text-lg italic text-blush-100/80 sm:text-xl">
                And I was so lost in that moment that I literally forgot I had to greet your
                parents too. 😭❤️
              </p>
            </Reveal>

            <Reveal delay={1000}>
              <p className="text-base text-white/50">
                I was just standing there thinking...
              </p>
              <p className="mt-1 font-serif text-2xl text-gradient-romance sm:text-3xl">
                "This is really her."
              </p>
            </Reveal>

            <Reveal delay={1200}>
              <div className="mt-4 border-l-2 border-blush-400/40 pl-4">
                <p className="font-serif text-xl text-blush-200 sm:text-2xl">
                  And that first kiss...
                </p>
                <p className="mt-1 text-sm text-white/50">I'll never forget it.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
