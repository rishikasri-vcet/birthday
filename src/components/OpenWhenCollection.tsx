import React, { useState } from 'react';
import { OPEN_WHEN_LETTERS, OpenWhenLetter } from '../data/openWhenLetters';
import { OpenWhenModal } from './OpenWhenModal';
import { WaxSealButton, WashiTapeStrip, SatinBow, PostageStamp } from './scrapbook/Decorations';
import { Mail, Heart, Sparkles } from 'lucide-react';

interface OpenWhenCollectionProps {
  onContinue: () => void;
}

export const OpenWhenCollection: React.FC<OpenWhenCollectionProps> = ({ onContinue }) => {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);
  const [openedLetterIds, setOpenedLetterIds] = useState<number[]>([]);

  const handleOpenLetter = (letter: OpenWhenLetter) => {
    setSelectedLetter(letter);
    if (!openedLetterIds.includes(letter.id)) {
      setOpenedLetterIds([...openedLetterIds, letter.id]);
    }
  };

  return (
    <section id="open-when-section" className="relative min-h-screen py-20 px-4 md:px-10 bg-[#FAF6EF] paper-texture">
      {/* Decorative scrap accents */}
      <div className="absolute top-8 left-8 opacity-75 hidden sm:block">
        <PostageStamp text="ARCHIVE" subtext="14 LETTERS" icon="💌" rotation="-rotate-6" />
      </div>
      <div className="absolute top-10 right-12 opacity-80 hidden sm:block">
        <SatinBow color="#9E4760" />
      </div>

      {/* Main Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FAF3E3] rounded-full border border-[#CCA962]/40 mb-3">
          <Sparkles size={14} className="text-[#CCA962]" />
          <span className="font-serif text-xs font-semibold uppercase tracking-widest text-[#7A5043]">
            💌 OPEN WHEN…
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#521422] tracking-tight uppercase mb-4">
          FOR EVERY VERSION OF YOU 🤍
        </h2>

        {/* Exact Supporting Text Required by Prompt */}
        <div className="space-y-1 font-handwriting text-2xl sm:text-3xl text-[#7E4352] font-semibold leading-snug">
          <p>For the happy you.</p>
          <p>For the angry you.</p>
          <p>For the tired you.</p>
          <p>For the overthinking you.</p>
          <p className="text-[#521422] font-bold pt-1">For every version of you that I love.</p>
        </div>

        <p className="font-serif italic text-xs sm:text-sm text-[#8C6D53] mt-4">
          Click any vintage envelope below to break its wax seal and open the letter.
        </p>
      </div>

      {/* 14 Envelopes Scrapbook Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {OPEN_WHEN_LETTERS.map((letter, index) => {
          const isOpened = openedLetterIds.includes(letter.id);
          const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
          const rotation = rotations[index % rotations.length];

          return (
            <div
              key={letter.id}
              onClick={() => handleOpenLetter(letter)}
              className={`group relative p-6 rounded-sm shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1.5 hover:rotate-0 ${rotation}`}
              style={{ backgroundColor: letter.envelopeColor }}
            >
              {/* Top Washi Tape */}
              <div className="absolute -top-3 left-8">
                <WashiTapeStrip color={index % 2 === 0 ? 'parchment' : 'blush'} width="w-20" />
              </div>

              {/* Envelope flap aesthetic styling */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-lg shadow-sm">
                  {letter.stampIcon}
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-[#682436]/70">
                  #{letter.id} OF 14
                </span>
              </div>

              {/* Title */}
              <h4 className="font-serif text-lg font-bold text-[#521422] group-hover:text-[#682436] transition-colors leading-snug mb-2">
                {letter.title}
              </h4>

              <p className="font-handwriting text-xl text-[#7E4352] italic mb-6">
                "{letter.moodNote}"
              </p>

              {/* Wax Seal & Status */}
              <div className="flex items-center justify-between pt-3 border-t border-[#3D2319]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: letter.waxColor }} />
                  <span className="font-sans text-[10px] tracking-wider uppercase text-[#682436]">
                    {isOpened ? 'Read Already' : 'Unopened'}
                  </span>
                </div>
                <span className="font-handwriting text-base text-[#521422] font-semibold group-hover:translate-x-1 transition-transform">
                  Open Letter →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress & Continue to Next Section */}
      <div className="mt-16 text-center">
        <p className="font-serif text-sm text-[#8C6D53] mb-4">
          You've explored {openedLetterIds.length} of 14 letters 💌
        </p>
        <button
          onClick={onContinue}
          className="px-8 py-3.5 bg-[#521422] hover:bg-[#682436] text-[#FFFDF9] rounded-sm font-serif text-base tracking-wider font-semibold shadow-md hover:shadow-lg transition-all"
        >
          Now Let Me Talk About YOU →
        </button>
      </div>

      {/* Modal View for Opened Letter */}
      <OpenWhenModal
        letter={selectedLetter}
        onClose={() => setSelectedLetter(null)}
        onLetterUpdate={(id, newContent) => {
          // Keep content synced
        }}
      />
    </section>
  );
};
