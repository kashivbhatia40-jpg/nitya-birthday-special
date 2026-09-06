import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { Lightbox } from '../Lightbox';
import { PHOTOS } from '@/content';

export function FavouriteDaySection() {
  return (
    <section id="favourite-day" className="relative overflow-hidden px-4 py-24 sm:py-32">
      <StarField count={30} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <Reveal>
          <h2 className="cinematic-heading mb-10 text-center text-3xl text-gradient-romance sm:text-4xl md:text-5xl">
            One day I would happily live again.
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <Lightbox
            src={PHOTOS.parkFallback}
            fallbackSrc={PHOTOS.parkFallback}
            alt="A day roaming around parks together"
            caption="Our favourite day"
            className="aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-2xl"
          />
        </Reveal>

        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          <Reveal delay={400}>
            <p className="text-base leading-relaxed text-white/70 sm:text-lg">
              That day we spent the whole day roaming around parks with your brother...
            </p>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex flex-wrap gap-x-2 gap-y-1 font-serif text-lg text-blush-100/80 sm:text-xl">
              <span>laughing,</span>
              <span>walking,</span>
              <span>enjoying the little things,</span>
              <span>and simply being together.</span>
            </div>
          </Reveal>

          <Reveal delay={800}>
            <p className="text-base leading-relaxed text-white/60 sm:text-lg">
              Nothing extraordinary had to happen.
            </p>
          </Reveal>

          <Reveal delay={1000}>
            <p className="font-serif text-xl italic text-blush-100/80 sm:text-2xl">
              You were there.
              <br />
              And somehow that was enough to make the entire day extraordinary.
            </p>
          </Reveal>

          <Reveal delay={1200}>
            <p className="text-base text-white/50">I really miss those days.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
