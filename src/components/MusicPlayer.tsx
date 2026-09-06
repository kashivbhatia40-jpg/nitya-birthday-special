import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Music2 } from 'lucide-react';

/**
 * Floating music control. Expects a local file at /audio/rabba.mp3.
 * If the file is missing the player shows a disabled state with a
 * small hint. Never autoplays — starts only on user click.
 */
export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const check = async () => {
      try {
        const res = await fetch('/audio/rabba.mp3', { method: 'HEAD' });
        setAvailable(res.ok);
      } catch {
        setAvailable(false);
      }
    };
    check();
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio || !available) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0;
      audio.play().then(() => {
        // smooth fade-in
        const fade = setInterval(() => {
          if (audio.volume < 0.7) {
            audio.volume = Math.min(0.7, audio.volume + 0.05);
          } else {
            clearInterval(fade);
          }
        }, 50);
      });
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/rabba.mp3"
        loop
        preload="none"
        onEnded={() => setPlaying(false)}
      />
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-1.5">
        <button
          onClick={toggle}
          disabled={!available}
          className={`group flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-lg transition-all duration-300 ${
            available
              ? 'glass-pink text-blush-100 hover:scale-105 hover:text-white active:scale-95'
              : 'glass text-white/40 cursor-not-allowed'
          }`}
          aria-label={playing ? 'Pause music' : 'Play music'}
        >
          {available ? (
            playing ? (
              <Pause size={16} className="text-blush-300" />
            ) : (
              <Play size={16} className="text-blush-300" />
            )
          ) : (
            <Music2 size={16} />
          )}
          <span className="hidden sm:inline">
            {available ? (playing ? 'Pause' : 'Play') : 'No music file'}
          </span>
        </button>
        {!available && (
          <p className="max-w-[140px] text-right text-[10px] leading-tight text-white/30">
            Add your licensed music file to play this.
          </p>
        )}
      </div>
    </>
  );
}
