import React, { useState } from 'react';
import { OpenWhenLetter } from '../data/openWhenLetters';
import { X, Edit3, Check, Sparkles, Heart } from 'lucide-react';
import { WaxSealButton, SatinBow, PostageStamp, WashiTapeStrip } from './scrapbook/Decorations';

interface OpenWhenModalProps {
  letter: OpenWhenLetter | null;
  onClose: () => void;
  onLetterUpdate: (id: number, newContent: string) => void;
}

export const OpenWhenModal: React.FC<OpenWhenModalProps> = ({ letter, onClose, onLetterUpdate }) => {
  if (!letter) return null;

  const storageKey = `open_when_letter_${letter.id}`;
  const [content, setContent] = useState<string>(() => {
    return localStorage.getItem(storageKey) || letter.defaultContent;
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = () => {
    localStorage.setItem(storageKey, content);
    onLetterUpdate(letter.id, content);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3D2319]/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative max-w-2xl w-full my-8 bg-[#FFFDF9] rounded-sm p-6 sm:p-10 md:p-12 shadow-2xl border border-[#EADBCA] vintage-parchment torn-paper-edge-top torn-paper-edge-bottom animate-fade-in">
        {/* Top washi tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <WashiTapeStrip color="burgundy" width="w-28" />
        </div>

        {/* Close / Skip for now Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8C6D53] hover:text-[#521422] rounded-full hover:bg-[#F2E3C6]/50 transition-colors"
          title="Close or Skip for now"
        >
          <X size={20} />
        </button>

        {/* Envelope Header Details */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E8DEC8] gap-3 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{letter.stampIcon}</span>
            <div>
              <span className="font-sans text-[10px] tracking-widest uppercase text-[#8C6D53]">
                Letter #{letter.id} of 14
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#521422]">
                {letter.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (isEditing) handleSave();
                else setIsEditing(true);
              }}
              className="px-3 py-1 bg-[#FAF3E3] hover:bg-[#F2E3C6] border border-[#CCA962] rounded text-xs font-serif text-[#521422] flex items-center gap-1 transition-colors"
            >
              {isEditing ? <Check size={13} /> : <Edit3 size={13} />}
              {isEditing ? 'Save' : 'Edit / Paste Your Words'}
            </button>
          </div>
        </div>

        {/* Mood note banner */}
        <div className="bg-[#FAF3E3]/80 p-3 rounded border border-[#EEDBBA] mb-6 flex items-center justify-between">
          <p className="font-handwriting text-xl text-[#7E4352] italic flex items-center gap-2">
            <span>{letter.accentFlower}</span>
            "{letter.moodNote}"
          </p>
          <span className="text-xs font-serif text-[#9C8271]">Rishika's note 🤍</span>
        </div>

        {/* Letter Body Text */}
        <div className="min-h-[220px]">
          {isEditing ? (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={12}
              className="w-full p-4 bg-[#FFFDF9] border border-[#C49C77] rounded font-serif text-sm sm:text-base leading-relaxed text-[#3D2319] focus:outline-none focus:ring-1 focus:ring-[#9E4760]"
              placeholder="Paste your exact letter here..."
            />
          ) : (
            <div className="font-serif text-base sm:text-lg leading-relaxed sm:leading-loose text-[#3D2319] whitespace-pre-line">
              {content}
            </div>
          )}
        </div>

        {/* Footer / Skip action */}
        <div className="mt-8 pt-4 border-t border-[#E8DEC8] flex items-center justify-between text-xs font-serif text-[#8C6D53]">
          <button
            onClick={onClose}
            className="hover:text-[#521422] transition-colors flex items-center gap-1"
          >
            ← Skip for now (come back anytime)
          </button>
          <span className="font-handwriting text-base text-[#9E4760] font-semibold">
            Always here for you 🤍
          </span>
        </div>
      </div>
    </div>
  );
};
