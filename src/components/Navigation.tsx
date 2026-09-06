import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', target: 'hero' },
  { label: 'Our Story', target: 'story' },
  { label: 'Memories', target: 'memories' },
  { label: 'Reasons', target: 'reasons' },
  { label: 'Letters', target: 'letters' },
  { label: 'Future', target: 'future' },
  { label: 'My Letter', target: 'letter' },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 hidden justify-center transition-all duration-500 md:flex ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`flex items-center gap-1 rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled ? 'glass shadow-lg' : 'bg-transparent'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="rounded-full px-4 py-1.5 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-blush-100"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-2">
          <button
            onClick={() => setOpen(!open)}
            className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-blush-100 shadow-lg"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
            <span className="font-serif text-base">{NAV_ITEMS[0].label}</span>
          </button>
        </div>

        {open && (
          <div className="absolute bottom-full left-0 right-0 px-4 pb-2">
            <div className="glass flex flex-col gap-1 rounded-2xl p-2 shadow-2xl animate-fade-up">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="rounded-xl px-4 py-2.5 text-left text-sm text-white/70 transition-colors hover:bg-blush-500/10 hover:text-blush-100"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
