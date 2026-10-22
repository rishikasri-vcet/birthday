import React, { useState } from 'react';
import { OpeningScene } from './components/OpeningScene';
import { CountdownReveal } from './components/CountdownReveal';
import { ReactionGame } from './components/ReactionGame';
import { BirthdayLetter } from './components/BirthdayLetter';
import { AboutChriram } from './components/AboutChriram';
import { FinalScene } from './components/FinalScene';

export const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen universe-cosmos text-[#2C1D18] relative selection:bg-[#E5BAC4] selection:text-[#4E1422]">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#0C0A16]/85 backdrop-blur-md border-b border-[#C9A96E]/20 px-6 py-2.5 flex items-center justify-between text-xs font-times text-[#E8D7B0]">
        <div className="flex items-center gap-2">
          <span className="text-base text-[#C9A96E]">✧</span>
          <span className="font-bold text-[#F8F2DE] uppercase tracking-widest text-xs">
            Chriram’s Universe
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-cursive text-2xl text-[#E5BAC4]">Birthday ✧ 2026</span>
        </div>
      </header>

      {/* Scene 1: Celestial Poetic Opening (No photos) */}
      <OpeningScene
        onReadyClick={() => {
          setCurrentStep(2);
          setTimeout(() => scrollTo('countdown-section'), 100);
        }}
      />

      {/* Scene 2: Celestial Countdown & Editorial Birthday Reveal (No photos) */}
      {currentStep >= 2 && (
        <CountdownReveal
          onContinue={() => {
            setCurrentStep(3);
            setTimeout(() => scrollTo('reaction-section'), 100);
          }}
        />
      )}

      {/* Scene 3: Playful Birthday Reaction with Cute Love Error (24 Notes) */}
      {currentStep >= 3 && (
        <ReactionGame
          onSuccess={() => {
            setCurrentStep(4);
            setTimeout(() => scrollTo('letter-section'), 350);
          }}
        />
      )}

      {/* Scene 4: Personal Birthday Letter (Photo subtly in envelope background/keepsake) */}
      {currentStep >= 4 && (
        <BirthdayLetter
          onContinue={() => {
            setCurrentStep(5);
            setTimeout(() => scrollTo('about-section'), 100);
          }}
          photoUrl="/photos/IMG-20260726-WA0053.jpg"
        />
      )}

      {/* Scene 5: About Chriram - Celestial Soul Portraits (With his photos) */}
      {currentStep >= 5 && (
        <AboutChriram
          onContinue={() => {
            setCurrentStep(6);
            setTimeout(() => scrollTo('final-section'), 100);
          }}
        />
      )}

      {/* Scene 6: Final Emotional Benediction (With his spotlight photo) */}
      {currentStep >= 6 && (
        <FinalScene
          photoUrl="/photos/IMG-20260726-WA0055.jpg"
        />
      )}
    </div>
  );
};

export default App;