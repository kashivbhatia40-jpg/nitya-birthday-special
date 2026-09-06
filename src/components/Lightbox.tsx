import { useEffect, useState, useCallback } from 'react';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  caption?: string;
  trigger?: React.ReactNode;
  className?: string;
}

/**
 * Image with click-to-zoom lightbox. If the primary `src` fails to
 * load, falls back to `fallbackSrc` (e.g. a Pexels stock photo).
 */
export function Lightbox({ src, fallbackSrc, alt, caption, trigger, className = '' }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = useCallback(() => {
    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  }, [fallbackSrc, imgSrc]);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close]);

  return (
    <>
      <div
        className={`cursor-zoom-in group relative overflow-hidden rounded-2xl ${className}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        {trigger ?? (
          <img
            src={imgSrc}
            alt={alt}
            loading="lazy"
            onError={handleError}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-opacity group-hover:ring-blush-400/30" />
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: '0 0 40px rgba(245,66,111,0.2) inset' }}
        />
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-midnight-950/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={close}
        >
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            onClick={close}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={imgSrc}
              alt={alt}
              onError={handleError}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
              style={{ boxShadow: '0 0 60px rgba(245,66,111,0.15)' }}
            />
            {caption && (
              <figcaption className="mt-4 text-center font-serif text-lg text-blush-100">
                {caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
