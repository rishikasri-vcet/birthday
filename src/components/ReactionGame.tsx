import React, { useState } from 'react';
import { REACTION_OPTIONS, ReactionOption } from '../data/reactionOptions';
import { SatinBow, CelestialSticker } from './scrapbook/Decorations';
import { Heart, Sparkles } from 'lucide-react';

interface ReactionGameProps {
  onSuccess: () => void;
}

export const ReactionGame: React.FC<ReactionGameProps> = ({ onSuccess }) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [shakeId, setShakeId] = useState<number | null>(null);

  const handleOptionClick = (option: ReactionOption) => {
    if (option.isCorrect) {
      setErrorMessage(null);
      setSuccessMessage("I knew it! 😌🤍");
      setTimeout(() => {
        onSuccess();
      }, 1200);
    } else {
      setSuccessMessage(null);
      setShakeId(option.id);
      // Cute, tiny love error
      setErrorMessage("love error! 🥺 try again, handsome 🤍");
      setTimeout(() => setShakeId(null), 500);
      setTimeout(() => setErrorMessage(null), 2500);
    }
  };

  return (
    <section id="reaction-section" className="relative min-h-screen py-20 px-4 md:px-10 universe-cosmos flex flex-col items-center justify-center">
      {/* Decorative Stickers */}
      <div className="absolute top-8 left-12 hidden sm:block">
        <CelestialSticker type="botanical" />
      </div>
      <div className="absolute top-10 right-16">
        <SatinBow color="#9E4760" />
      </div>

      {/* Header section in Playfair Display & Dancing Script */}
      <div className="text-center max-w-xl mb-10 z-10 space-y-2">
        <span className="font-poppins text-xs uppercase tracking-widest text-[#E8D7B0] font-semibold">
          ✦ An Honest Question ✦
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F2DE] tracking-wide">
          Did this make you smile, Chriram?
        </h2>
        <p className="font-dancing text-3xl sm:text-4xl text-[#E5BAC4]">
          Be honest… I know that little smirk. 🤍
        </p>
      </div>

      {/* Cute, Tiny, Floating Love Error Sticker Alert */}
      {errorMessage && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="bg-[#FAF2E1] text-[#682436] px-5 py-2.5 rounded-full shadow-lg border border-[#D49AA8] flex items-center gap-2">
            <Heart size={16} fill="#D49AA8" className="text-[#9E4760] shrink-0" />
            <span className="font-poppins text-xs sm:text-sm font-semibold">
              {errorMessage}
            </span>
          </div>
        </div>
      )}

      {/* Cute Success Note */}
      {successMessage && (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-[#FAF2E1] text-[#2D4F38] px-6 py-3 rounded-full shadow-xl border-2 border-[#A8D5BA] flex items-center gap-2">
            <Sparkles size={18} className="text-[#A8D5BA] shrink-0" />
            <span className="font-poppins text-sm sm:text-base font-bold tracking-wide">
              {successMessage}
            </span>
          </div>
        </div>
      )}

      {/* 24 Scrapbook Paper Scraps Grid */}
      <div className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-[#FAF5EC]/90 backdrop-blur-sm rounded-sm border border-[#E5DAC6] shadow-2xl">
        {REACTION_OPTIONS.map((option) => {
          const isShaking = shakeId === option.id;
          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className={`relative p-3 rounded-sm border text-left transition-all duration-300 hover:scale-105 hover:z-20 cursor-pointer shadow-sm hover:shadow-md ${option.rotation} ${option.styleClass} ${
                isShaking ? 'animate-[wiggle_0.2s_ease-in-out_infinite] border-pink-400' : ''
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#A68F7F]/40 mx-auto mb-1" />
              <p className="font-poppins text-xs sm:text-sm leading-snug">
                {option.text}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center text-xs font-poppins text-[#E8D7B0]">
        <p className="italic">Touch the lovable answer to enter ✧</p>
      </div>
    </section>
  );
};