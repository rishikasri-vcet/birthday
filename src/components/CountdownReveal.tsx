import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { SatinBow, WashiTapeStrip, CelestialSticker } from './scrapbook/Decorations';

interface CountdownRevealProps {
  onContinue: () => void;
}

export const CountdownReveal: React.FC<CountdownRevealProps> = ({ onContinue }) => {
  const [count, setCount] = useState<number>(3);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const triggerConfetti = () => {
    const colors = ['#C9A96E', '#F8F2DE', '#E5BAC4', '#4E1422', '#D49AA8', '#967843'];
    
    confetti({
      particleCount: 65,
      angle: 60,
      spread: 60,
      origin: { x: 0.15, y: 0.6 },
      colors: colors
    });

    confetti({
      particleCount: 65,
      angle: 120,
      spread: 60,
      origin: { x: 0.85, y: 0.6 },
      colors: colors
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 90,
        origin: { y: 0.4 },
        colors: colors,
        shapes: ['circle']
      });
    }, 450);
  };

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (count === 0 && !isRevealed) {
      setIsRevealed(true);
      triggerConfetti();
    }
  }, [count, isRevealed]);

  return (
    <section 
      id="countdown-section" 
      className="relative min-h-screen flex items-center justify-center p-4 md:p-10 universe-cosmos overflow-hidden"
    >
      {!isRevealed ? (
        /* Countdown Sequence: 3 -> 2 -> 1 */
        <div className="text-center z-10 flex flex-col items-center">
          <div className="relative p-12 md:p-16 scrapbook-card rounded-full border-2 border-dashed border-[#C9A96E] animate-gentle-pulse">
            <span className="font-playfair text-8xl md:text-9xl font-bold text-[#4E1422] tracking-tighter drop-shadow-sm">
              {count}
            </span>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <SatinBow color="#9E4760" />
            </div>
          </div>
          <p className="font-dancing text-3xl sm:text-4xl text-[#E8D7B0] mt-6 tracking-wide animate-pulse">
            The stars are aligning for Chriram… ✧
          </p>
        </div>
      ) : (
        /* Pinterest Editorial Birthday Reveal (No photo here per instruction) */
        <div className="relative max-w-3xl w-full scrapbook-card rounded-sm p-8 sm:p-14 md:p-16 border border-[#EADBCA] text-center torn-paper-edge-top torn-paper-edge-bottom z-10 animate-fade-in">
          {/* Top Washi Tape and Bow */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <WashiTapeStrip color="gold" width="w-40" rotation="-rotate-1" />
            <SatinBow color="#4E1422" className="scale-125" />
          </div>

          <div className="absolute top-8 left-8 hidden sm:block">
            <CelestialSticker type="crescent" />
          </div>
          <div className="absolute top-8 right-8 hidden sm:block">
            <CelestialSticker type="starburst" />
          </div>

          {/* Header */}
          <div className="flex justify-center items-center gap-2 text-[#C9A96E] mb-6">
            <Sparkles size={17} />
            <span className="font-poppins text-xs tracking-widest uppercase font-semibold text-[#8C6D53]">
              To The Boy Who Lights Up The Sky
            </span>
            <Sparkles size={17} />
          </div>

          {/* Pinterest Editorial Typography in Playfair Display */}
          <div className="space-y-2 mb-6">
            <p className="font-playfair text-3xl sm:text-5xl md:text-6xl font-normal text-[#4E1422] tracking-widest uppercase border-b border-[#EADBCA] pb-3 inline-block">
              HAPPY BIRTHDAY
            </p>
            <div className="pt-2">
              <span className="font-playfair italic font-bold text-5xl sm:text-7xl md:text-8xl text-[#221D32] tracking-tight block">
                Chriram
              </span>
            </div>
          </div>

          {/* Elegant handwritten pet name in Dancing Script */}
          <div className="my-6 inline-block bg-[#FAF2E1] px-8 py-2.5 rounded-full border border-[#C9A96E]/50 shadow-sm transform -rotate-1 hover:rotate-0 transition-transform">
            <p className="font-dancing text-4xl sm:text-5xl md:text-6xl text-[#682436] leading-tight font-semibold">
              Kutttyyy Jatttiiiiiiii 🤍
            </p>
          </div>

          {/* Short, Poetic Birthday Ode */}
          <div className="max-w-xl mx-auto my-7 space-y-2 text-center">
            <p className="font-playfair italic text-xl sm:text-2xl text-[#3D2319] leading-relaxed">
              "You make this whole world a little softer, and a lot more beautiful."
            </p>
            <p className="font-poppins text-sm sm:text-base text-[#7A6050] tracking-wider">
              May your year shine as bright as the light you bring to everyone.
            </p>
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={triggerConfetti}
              className="px-6 py-3 bg-[#FAF7F0] hover:bg-[#F3ECE0] text-[#4E1422] border border-[#C9A96E] rounded-sm font-poppins text-xs tracking-widest uppercase font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles size={15} /> Stardust & Sparkles
            </button>
            <button
              onClick={onContinue}
              className="px-8 py-3.5 bg-[#4E1422] hover:bg-[#682436] text-[#FFFDF9] rounded-sm font-poppins text-xs tracking-widest uppercase font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              Turn the page →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};