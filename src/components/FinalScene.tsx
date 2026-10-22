import React, { useState, useEffect } from 'react';
import { Polaroid } from './scrapbook/Polaroid';
import { SatinBow, WashiTapeStrip, PostageStamp, CelestialSticker } from './scrapbook/Decorations';
import confetti from 'canvas-confetti';

interface FinalSceneProps {
  photoUrl?: string;
}

export const FinalScene: React.FC<FinalSceneProps> = ({ photoUrl }) => {
  const [stage, setStage] = useState<number>(0);

  useEffect(() => {
    if (stage < 5) {
      const timer = setTimeout(() => {
        setStage((prev) => prev + 1);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const triggerStardust = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#C9A96E', '#F8F2DE', '#E5BAC4', '#4E1422', '#D49AA8']
    });
  };

  return (
    <section id="final-section" className="relative min-h-screen py-24 px-4 md:px-10 universe-cosmos flex flex-col items-center justify-center overflow-hidden">
      {/* Decorative stamps & stickers */}
      <div className="absolute top-10 left-12 hidden sm:block animate-sticker" style={{ '--rot': '-4deg' } as any}>
        <PostageStamp text="OUR LOVE" subtext="Our Little World" icon="✧" rotation="-rotate-3" />
      </div>
      <div className="absolute top-12 right-14">
        <SatinBow color="#4E1422" className="scale-125" />
      </div>

      <div className="absolute bottom-16 left-12 animate-twinkle hidden sm:block">
        <CelestialSticker type="crescent" />
      </div>

      {/* Main Keepsake Card */}
      <div className="relative max-w-2xl w-full scrapbook-card rounded-sm p-8 sm:p-14 border border-[#EADBCA] text-center torn-paper-edge-top torn-paper-edge-bottom z-10">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <WashiTapeStrip color="gold" width="w-40" />
        </div>

        {/* Featured Photo of Chriram */}
        <div className="mb-8 flex justify-center">
          <Polaroid
            imageSrc={photoUrl || "/photos/IMG-20260726-WA0055.jpg"}
            caption="The Birthday Boy ✧ Forever Loved"
            date="October 2026"
            rotation="-rotate-1"
            tapeColor="gold"
            aspectRatio="portrait"
            className="max-w-[280px]"
          />
        </div>

        {/* Sequential Short Poetic Reveal */}
        <div className="space-y-4 max-w-lg mx-auto min-h-[190px]">
          {stage >= 0 && (
            <h2 className="font-playfair text-3xl sm:text-4xl font-normal text-[#4E1422] leading-tight animate-fade-in">
              Happy birthday, my favorite human.
            </h2>
          )}

          {stage >= 1 && (
            <p className="font-playfair italic text-lg sm:text-xl text-[#682436] animate-fade-in">
              Thank you for existing, and for lighting up my world.
            </p>
          )}

          {stage >= 2 && (
            <p className="font-poppins text-sm sm:text-base text-[#3D2319] leading-relaxed animate-fade-in">
              May your year be as bright and beautiful as your heart.
            </p>
          )}

          {stage >= 3 && (
            <div className="pt-1 animate-fade-in">
              <p className="font-dancing text-3xl text-[#9E4760]">
                And now… come here.
              </p>
              <p className="font-poppins text-base sm:text-lg text-[#4E1422] font-semibold mt-0.5">
                I still have an entire year of annoying you planned. 🤍
              </p>
            </div>
          )}

          {stage >= 4 && (
            <div className="pt-5 border-t border-[#E8DEC8] animate-fade-in">
              <p className="font-playfair text-xl sm:text-2xl text-[#4E1422] tracking-wider uppercase font-bold">
                With All My Love, Rishika
              </p>
            </div>
          )}
        </div>

        {/* Final cute handwritten message */}
        {stage >= 5 && (
          <div 
            onClick={triggerStardust}
            className="mt-10 p-3.5 bg-[#FAF2E1] rounded border border-[#C9A96E]/50 inline-block animate-gentle-pulse cursor-pointer hover:shadow-md transition-shadow"
          >
            <p className="font-dancing text-3xl text-[#8C3B52]">
              psst…
            </p>
            <p className="font-playfair italic text-2xl text-[#4E1422] font-bold">
              happy birthday again, idiot. 🤍
            </p>
            <span className="text-[10px] font-poppins uppercase tracking-widest text-[#8C6D53] mt-0.5 block">
              ✦ tap for cute stars ✦
            </span>
          </div>
        )}
      </div>

      <div className="mt-8 text-center font-poppins text-xs text-[#E8D7B0]">
        <p className="italic">Created just for you, Chriram ✧</p>
      </div>
    </section>
  );
};