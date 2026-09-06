import { Reveal } from '../Reveal';
import { StarField } from '../StarField';
import { Lightbox } from '../Lightbox';
import { FloatingHearts } from '../FloatingHearts';
import { PHOTOS, NICKNAMES } from '@/content';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20"
    >
      <StarField count={100} shootingStars />
      <FloatingHearts count={8} />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, rgba(245,66,111,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center">
        <Reveal>
          <Lightbox
            src={PHOTOS.puppy}
            fallbackSrc={PHOTOS.puppyFallback}
            alt="The two of us together"
            caption="My Baby Panda and me"
            className="mx-auto aspect-[4/5] w-56 overflow-hidden rounded-3xl shadow-2xl sm:w-64"
          />
        </Reveal>

        <Reveal delay={200}>
          <h1 className="cinematic-heading text-4xl text-gradient-romance sm:text-5xl md:text-6xl">
            Happy Birthday,
            <br />
            My Baby Panda 🐼❤️
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="font-serif text-xl text-blush-100/80 sm:text-2xl">
            To the sweetest soul in this world.
          </p>
        </Reveal>

        <Reveal delay={600} className="max-w-lg">
          <p className="text-base leading-relaxed text-white/60 sm:text-lg">
            Nitya, you are not just someone I love.
            <br />
            You are my happiness, my comfort, my favourite person and a huge part of the reason I
            smile every day.
          </p>
        </Reveal>

        <Reveal delay={800}>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {NICKNAMES.map((name) => (
              <span
                key={name}
                className="glass rounded-full px-4 py-2 text-sm text-blush-100/90 transition-transform hover:scale-105"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1000}>
          <p className="font-serif text-lg italic text-white/50 sm:text-xl">
            Yes... all of these are you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
