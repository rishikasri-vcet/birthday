import React, { useState } from 'react';
import { WaxSealButton, WashiTapeStrip, SatinBow, PostageStamp, CelestialSticker } from './scrapbook/Decorations';
import { Mail, Edit3, Check, Sparkles } from 'lucide-react';

interface BirthdayLetterProps {
  onContinue: () => void;
  photoUrl?: string;
}

export const BirthdayLetter: React.FC<BirthdayLetterProps> = ({ onContinue, photoUrl }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Short, sweet, poetic, understandable letter
  const defaultPoeticLetter = `Dear Chriram,

Happy birthday to my favorite human in the entire universe.

You have this quiet way of making everything feel safe, warm, and right. You never have to try to be special—you just are. Your smile, your kindness, and the way you care mean more to me than words can ever say.

I hope this year brings you all the peace, laughter, and happiness that you give to everyone around you.

Happy birthday, Kutty Jatti. I am so lucky to have you in my life.

Always with you,
Rishika 🤍`;

  const [letterContent, setLetterContent] = useState<string>(() => {
    return localStorage.getItem('chriram_birthday_letter_v2') || defaultPoeticLetter;
  });

  const handleSave = () => {
    localStorage.setItem('chriram_birthday_letter_v2', letterContent);
    setIsEditing(false);
  };

  return (
    <section id="letter-section" className="relative min-h-screen py-20 px-4 md:px-10 universe-cosmos flex flex-col items-center justify-center">
      {/* Decorative stamps & stickers */}
      <div className="absolute top-8 left-10 hidden sm:block">
        <PostageStamp text="FOR HIM" subtext="Our Little World" icon="✉️" rotation="-rotate-3" />
      </div>
      <div className="absolute top-10 right-14">
        <SatinBow color="#9E4760" />
      </div>

      {/* Intro sequence text */}
      <div className="text-center max-w-lg mb-10 z-10 space-y-1">
        <span className="font-poppins text-xs uppercase tracking-widest text-[#E8D7B0]">
          ✦ Handwritten Parchment ✦
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl text-[#F8F2DE] font-normal tracking-wide">
          A Letter For Chriram
        </h2>
        <p className="font-dancing text-3xl sm:text-4xl text-[#E5BAC4]">
          words written just for your soul 🤍
        </p>
      </div>

      {/* Sealed Vintage Envelope (Photo subtly in envelope background) */}
      {!isOpen ? (
        <div className="relative max-w-md w-full bg-[#EADCC8] rounded-sm p-8 sm:p-12 shadow-2xl border border-[#D5C1A6] text-center flex flex-col items-center transform transition-transform hover:scale-[1.02] overflow-hidden">
          {/* Subtle watermark photo of Chriram layered into envelope */}
          <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-multiply">
            <img 
              src={photoUrl || "/photos/IMG-20260726-WA0053.jpg"} 
              alt="Chriram Keepsake" 
              className="w-full h-full object-cover filter sepia"
            />
          </div>

          <div className="absolute -top-3 left-10 z-10">
            <WashiTapeStrip color="burgundy" width="w-24" />
          </div>
          <div className="absolute -top-3 right-10 z-10">
            <WashiTapeStrip color="gold" width="w-24" />
          </div>

          <div className="w-16 h-16 rounded-full bg-[#FAF3E3] flex items-center justify-center text-[#4E1422] shadow-inner mb-4 z-10 border border-[#C9A96E]/50">
            <Mail size={30} />
          </div>

          <p className="font-playfair text-lg font-bold text-[#4E1422] tracking-widest uppercase mb-1 z-10">
            To: Chriram
          </p>
          <p className="font-dancing text-3xl text-[#7A3648] font-normal mb-6 z-10">
            on your special day ✧
          </p>

          {/* Interactive Wax Seal Button */}
          <div className="my-2 z-10">
            <WaxSealButton
              onClick={() => setIsOpen(true)}
              label="Break Wax Seal To Read"
              icon="✧"
              size="lg"
            />
          </div>

          <p className="font-poppins text-[11px] text-[#8C6D53] tracking-widest uppercase mt-8 z-10">
            Vintage Stationery • Break The Seal
          </p>
        </div>
      ) : (
        /* Unfolded Vintage Letter with Photo Keepsake in Corner */
        <div className="relative max-w-2xl w-full scrapbook-card rounded-sm p-8 sm:p-14 border border-[#EADBCA] torn-paper-edge-top torn-paper-edge-bottom animate-fade-in z-20">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <WashiTapeStrip color="gold" width="w-36" />
          </div>
          <div className="absolute top-4 right-4 hidden sm:block">
            <CelestialSticker type="crescent" />
          </div>

          {/* Header Control */}
          <div className="flex justify-between items-center pb-4 border-b border-[#E8DEC8] mb-8">
            <div className="flex items-center gap-2 text-xs font-poppins text-[#8C6D53] tracking-widest uppercase">
              <Sparkles size={14} className="text-[#C9A96E]" />
              <span>For The Birthday Boy</span>
            </div>
            <button
              onClick={() => {
                if (isEditing) handleSave();
                else setIsEditing(true);
              }}
              className="px-3 py-1 bg-[#FAF7F0] hover:bg-[#F3ECE0] border border-[#C9A96E] rounded text-xs font-poppins text-[#4E1422] flex items-center gap-1 transition-colors cursor-pointer"
            >
              {isEditing ? <Check size={13} /> : <Edit3 size={13} />}
              {isEditing ? 'Save' : 'Personalize'}
            </button>
          </div>

          {/* Letter Content Area in Poppins & Playfair */}
          {isEditing ? (
            <div className="space-y-4">
              <textarea
                value={letterContent}
                onChange={(e) => setLetterContent(e.target.value)}
                rows={11}
                className="w-full p-4 bg-[#FFFDF9] border border-[#C49C77] rounded font-poppins text-sm leading-relaxed text-[#3D2319] focus:outline-none focus:ring-1 focus:ring-[#9E4760]"
                placeholder="Write your letter here..."
              />
              <div className="flex justify-end">
                <button
                  onClick={handleSave}
                  className="px-5 py-2 bg-[#4E1422] text-white rounded text-xs font-poppins font-semibold uppercase tracking-wider cursor-pointer"
                >
                  Save Letter
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              {/* Subtle watermark keepsake of him */}
              <div className="float-right ml-6 mb-4 w-32 sm:w-36 rounded border border-[#EADBCA] p-1.5 bg-[#FFFDF9] shadow-md rotate-2 hidden sm:block">
                <img 
                  src={photoUrl || "/photos/IMG-20260726-WA0053.jpg"} 
                  alt="Chriram Keepsake" 
                  className="w-full aspect-[4/5] object-cover rounded-sm filter sepia-[0.25]"
                />
                <p className="font-dancing text-center text-xl text-[#682436] mt-1 font-semibold">Chriram 🤍</p>
              </div>

              <div className="font-poppins text-sm sm:text-base leading-relaxed sm:leading-loose text-[#2C1D18] whitespace-pre-line font-normal">
                {letterContent}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="mt-10 pt-5 border-t border-[#E8DEC8] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs font-poppins text-[#8C6D53] hover:text-[#4E1422] underline italic cursor-pointer"
            >
              Fold Letter & Seal Again
            </button>
            <button
              onClick={onContinue}
              className="px-8 py-3 bg-[#4E1422] hover:bg-[#682436] text-[#FFFDF9] rounded-sm font-poppins text-xs tracking-widest uppercase font-semibold shadow transition-all cursor-pointer"
            >
              About Chriram →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};