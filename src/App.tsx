import { useState, useEffect } from 'react';
import { Intro } from '@/components/Intro';
import { Navigation } from '@/components/Navigation';
import { MusicPlayer } from '@/components/MusicPlayer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StorySection } from '@/components/sections/StorySection';
import { MetYouSection } from '@/components/sections/MetYouSection';
import { ThingsAboutYouSection } from '@/components/sections/ThingsAboutYouSection';
import { FavouriteDaySection } from '@/components/sections/FavouriteDaySection';
import { ReasonsSection } from '@/components/sections/ReasonsSection';
import { SecondOfEveryMonthSection } from '@/components/sections/SecondOfEveryMonthSection';
import { QuizSection } from '@/components/sections/QuizSection';
import { OpenWhenSection } from '@/components/sections/OpenWhenSection';
import { FutureSection } from '@/components/sections/FutureSection';
import { DreamSection } from '@/components/sections/DreamSection';
import { ChangeSection } from '@/components/sections/ChangeSection';
import { BigLetterSection } from '@/components/sections/BigLetterSection';
import { FinaleSection } from '@/components/sections/FinaleSection';

function App() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (entered) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [entered]);

  return (
    <>
      {!entered && <Intro onEnter={() => setEntered(true)} />}

      {entered && (
        <div className="relative min-h-screen bg-midnight-950">
          {/* Ambient gradient background */}
          <div
            className="pointer-events-none fixed inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse at 20% 0%, rgba(30,20,80,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 100%, rgba(245,66,111,0.04) 0%, transparent 50%)',
            }}
          />

          <Navigation />

          <main className="relative z-10">
            <HeroSection />
            <StorySection />
            <MetYouSection />
            <ThingsAboutYouSection />
            <FavouriteDaySection />
            <ReasonsSection />
            <SecondOfEveryMonthSection />
            <QuizSection />
            <OpenWhenSection />
            <FutureSection />
            <DreamSection />
            <ChangeSection />
            <BigLetterSection />
            <FinaleSection />
          </main>

          <MusicPlayer />
        </div>
      )}
    </>
  );
}

export default App;
