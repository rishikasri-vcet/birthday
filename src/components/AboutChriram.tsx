import React, { useState } from 'react';
import { Polaroid } from './scrapbook/Polaroid';
import { WashiTapeStrip, SatinBow, PostageStamp, CelestialSticker } from './scrapbook/Decorations';
import { Edit3, Check } from 'lucide-react';

interface AboutChriramProps {
  onContinue: () => void;
}

export const AboutChriram: React.FC<AboutChriramProps> = ({ onContinue }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Short, poetic, understandable observations celebrating him
  const defaultObservations = [
    {
      title: "His Smile",
      poeticNote: "The sweetest light in the entire universe. It makes any bad day disappear in a second.",
      photo: "/photos/IMG-20260726-WA0048.jpg",
      tapeColor: "gold" as const,
      rotation: "rotate-2"
    },
    {
      title: "His Quiet Care",
      poeticNote: "You don't talk loud, but the gentle way you look out for others speaks louder than anything.",
      photo: "/photos/IMG-20260726-WA0050.jpg",
      tapeColor: "parchment" as const,
      rotation: "-rotate-2"
    },
    {
      title: "His Silly Side",
      poeticNote: "The laugh, the goofy faces, the playful teasing that always cracks me up no matter what.",
      photo: "/photos/IMG-20260726-WA0052.jpg",
      tapeColor: "burgundy" as const,
      rotation: "rotate-1"
    },
    {
      title: "My Favorite Person",
      poeticNote: "Genuine, kind, and steady. The world is simply a better, warmer place because you are in it.",
      photo: "/photos/IMG-20260726-WA0056.jpg",
      tapeColor: "blush" as const,
      rotation: "-rotate-1"
    }
  ];

  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('chriram_celestial_cards_v2');
    return saved ? JSON.parse(saved) : defaultObservations;
  });

  const handleUpdate = (index: number, newNote: string) => {
    const updated = [...cards];
    updated[index].poeticNote = newNote;
    setCards(updated);
    localStorage.setItem('chriram_celestial_cards_v2', JSON.stringify(updated));
  };

  return (
    <section id="about-section" className="relative min-h-screen py-24 px-4 md:px-10 universe-cosmos">
      {/* Decorative stamps & stickers */}
      <div className="absolute top-8 left-8 hidden sm:block animate-sticker" style={{ '--rot': '-4deg' } as any}>
        <PostageStamp text="PORTRAIT" subtext="Our Little World" icon="✦" rotation="-rotate-3" />
      </div>
      <div className="absolute top-10 right-10 hidden sm:block animate-sticker" style={{ '--rot': '6deg' } as any}>
        <SatinBow color="#9E4760" />
      </div>

      {/* Header section in Playfair Display & Dancing Script */}
      <div className="text-center max-w-xl mx-auto mb-16 z-10 space-y-1">
        <span className="font-poppins text-xs uppercase tracking-widest text-[#E8D7B0] font-semibold">
          ✦ The Boy Behind The Smile ✦
        </span>
        <h2 className="font-playfair text-4xl sm:text-5xl font-normal text-[#F8F2DE] tracking-wide">
          About Chriram
        </h2>
        <p className="font-dancing text-3xl sm:text-4xl text-[#E5BAC4]">
          the little things that make you special ✧
        </p>

        <div className="pt-3 flex justify-center">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-1.5 bg-[#FAF7F0] hover:bg-[#F3ECE0] border border-[#C9A96E] rounded-sm text-xs font-poppins uppercase tracking-wider text-[#4E1422] flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            {isEditing ? <Check size={14} /> : <Edit3 size={14} />}
            {isEditing ? 'Save Notes' : 'Personalize Notes'}
          </button>
        </div>
      </div>

      {/* Scrapbook Collage Grid with Chriram's Photos */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {cards.map((item: any, idx: number) => (
          <div 
            key={idx}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-7 scrapbook-card rounded-sm border border-[#EADBCA] relative transform hover:rotate-0 transition-all duration-300"
          >
            {/* Washi tape on top */}
            <div className="absolute -top-3 left-8">
              <WashiTapeStrip color={item.tapeColor} width="w-28" />
            </div>

            {/* Photo Polaroid */}
            <div className="shrink-0">
              <Polaroid
                imageSrc={item.photo}
                caption={item.title}
                date=""
                rotation={item.rotation}
                tapeColor={item.tapeColor}
                aspectRatio="portrait"
                className="w-44 sm:w-48"
              />
            </div>

            {/* Short Poetic Reflection */}
            <div className="flex-1 w-full space-y-2">
              <h4 className="font-playfair text-xl sm:text-2xl font-bold text-[#4E1422]">
                {item.title}
              </h4>

              {isEditing ? (
                <textarea
                  value={item.poeticNote}
                  onChange={(e) => handleUpdate(idx, e.target.value)}
                  rows={3}
                  className="w-full p-2.5 bg-[#FAF7F0] border border-[#C9A96E] rounded font-poppins text-sm leading-relaxed focus:outline-none"
                />
              ) : (
                <p className="font-poppins text-sm sm:text-base text-[#3D2319] leading-relaxed">
                  "{item.poeticNote}"
                </p>
              )}

              <div className="pt-1 text-right">
                <span className="font-dancing text-2xl text-[#C9A96E]">Chriram 🤍</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="mt-16 text-center">
        <button
          onClick={onContinue}
          className="px-8 py-3.5 bg-[#4E1422] hover:bg-[#682436] text-[#FFFDF9] rounded-sm font-poppins text-xs tracking-widest uppercase font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          One Final Message For You →
        </button>
      </div>
    </section>
  );
};