import React, { useState, useEffect } from 'react';
import { WashiTapeStrip, SatinBow, PostageStamp, CelestialSticker } from './scrapbook/Decorations';
import { Sparkles } from 'lucide-react';

interface OpeningSceneProps {
  onReadyClick: () => void;
}

export const OpeningScene: React.FC<OpeningSceneProps> = ({ onReadyClick }) => {
  const [lineIndex, setLineIndex] = useState<number>(0);

  // Short, sweet, poetic, understandable lines
  const poeticLines = [
    "Under a sky full of stars…",
    "only one light matters today.",
    "The universe gave us you, Chriram.",
    "And today, it celebrates you. ✧"
  ];

  useEffect(() => {
    if (lineIndex < poeticLines.length - 1) {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [lineIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 md:p-12 universe-cosmos overflow-hidden">
      {/* Floating stickers & stamps */}
      <div className="absolute top-10 left-8 md:left-16 animate-sticker hidden sm:block" style={{ '--rot': '-8deg' } as any}>
        <PostageStamp text="CHRIRAM" subtext="Our Little World" icon="✧" rotation="-rotate-6" />
      </div>

      <div className="absolute top-12 right-10 md:right-24 animate-sticker" style={{ '--rot': '6deg' } as any}>
        <SatinBow color="#9E4760" />
      </div>

      <div className="absolute bottom-16 left-8 md:left-20 animate-twinkle">
        <CelestialSticker type="crescent" />
      </div>

      <div className="absolute bottom-20 right-10 md:right-28 animate-twinkle">
        <CelestialSticker type="starburst" />
      </div>

      {/* Main Scrapbook Cover Card (No photo here per instruction) */}
      <div className="relative max-w-2xl w-full scrapbook-card rounded-sm p-8 sm:p-14 md:p-16 border border-[#EADBCA] torn-paper-edge-top torn-paper-edge-bottom z-10 animate-fade-in">
        {/* Washi tapes on top */}
        <div className="absolute -top-3 left-12">
          <WashiTapeStrip color="gold" width="w-32" rotation="-rotate-1" />
        </div>
        <div className="absolute -top-3 right-14">
          <WashiTapeStrip color="blush" width="w-28" rotation="rotate-2" />
        </div>

        {/* Header tag */}
        <div className="flex justify-between items-center mb-10 border-b border-[#EBDCCB] pb-3">
          <span className="font-dancing text-xl text-[#7E4352] tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E]" />
            For You
          </span>
          <span className="font-poppins text-xs tracking-widest uppercase text-[#9C8271]">
            For Chriram ✧
          </span>
        </div>

        {/* Short, Poetic Lines */}
        <div className="space-y-5 my-8 text-center max-w-xl mx-auto min-h-[190px] flex flex-col justify-center">
          {poeticLines.slice(0, lineIndex + 1).map((line, idx) => (
            <p
              key={idx}
              className={`transition-all duration-700 ${
                idx === 0
                  ? 'font-playfair italic text-2xl sm:text-3xl text-[#521422] leading-tight'
                  : idx === 1
                  ? 'font-poppins text-xl sm:text-2xl text-[#3D2319] leading-tight font-normal'
                  : idx === 2
                  ? 'font-dancing text-3xl sm:text-4xl text-[#9E4760] py-1'
                  : 'font-playfair text-2xl sm:text-3xl text-[#521422] font-bold tracking-wide'
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Step Inside Button */}
        {lineIndex >= 2 && (
          <div className="pt-6 flex justify-center animate-fade-in">
            <button
              onClick={onReadyClick}
              className="group relative inline-flex flex-col items-center justify-center px-10 py-4 bg-[#FAF2E1] hover:bg-[#F3E6CE] border border-[#CCA962] rounded-sm shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
            >
              <div className="flex items-center gap-2 text-[#4E1422] font-playfair font-bold text-lg sm:text-xl tracking-wider">
                <Sparkles size={17} className="text-[#C9A96E]" />
                <span>Step inside your world</span>
                <Sparkles size={17} className="text-[#C9A96E]" />
              </div>
              <span className="font-dancing text-2xl text-[#9E4760] mt-0.5 group-hover:translate-x-1 transition-transform">
                where the stars celebrate you ✧
              </span>
              <div className="absolute -bottom-2 right-8 w-14 h-3 bg-[#D49AA8]/70 border-l border-r border-dashed border-white rotate-3" />
            </button>
          </div>
        )}

        {/* Footer note */}
        <div className="mt-12 pt-3 border-t border-[#F0E5D5] flex items-center justify-between text-xs font-poppins text-[#A68F7F]">
          <span className="italic">Written in the stars for Chriram</span>
          <span className="text-sm text-[#8B4254]">✦ ✧ ✦</span>
        </div>
      </div>
    </section>
  );
};