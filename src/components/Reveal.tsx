import { useEffect, useRef, useState, type ReactNode, type ElementType } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  as?: ElementType;
}

/**
 * Fades + slides children into view when scrolled into the viewport.
 * Respects prefers-reduced-motion via the CSS in index.css.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`${visible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
