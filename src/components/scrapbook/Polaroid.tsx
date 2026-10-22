import React from 'react';

interface PolaroidProps {
  imageSrc?: string;
  caption?: string;
  date?: string;
  rotation?: string;
  tapeColor?: 'blush' | 'parchment' | 'burgundy' | 'cream' | 'gold';
  className?: string;
  tapePosition?: 'top-center' | 'top-left' | 'top-right' | 'both-corners';
  aspectRatio?: 'square' | 'portrait' | 'wide';
}

export const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  caption = "Birthday Boy 🤍",
  date = "",
  rotation = "rotate-1",
  tapeColor = 'gold',
  className = "",
  tapePosition = 'top-center',
  aspectRatio = 'square'
}) => {
  const getTapeClass = () => {
    switch (tapeColor) {
      case 'blush': return 'washi-tape-stars';
      case 'burgundy': return 'washi-tape-deep';
      case 'cream': return 'bg-[#FAF3E3] border-white/60 shadow-sm';
      case 'gold': return 'washi-tape-gold';
      default: return 'washi-tape-gold';
    }
  };

  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'portrait': return 'aspect-[3/4]';
      case 'wide': return 'aspect-[4/3]';
      default: return 'aspect-square';
    }
  };

  return (
    <div className={`relative inline-block ${rotation} transition-all duration-300 hover:rotate-0 hover:scale-[1.02] ${className}`}>
      {/* Washi Tape */}
      {tapePosition === 'top-center' && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 ${getTapeClass()} z-20 -rotate-1`} />
      )}
      {tapePosition === 'top-left' && (
        <div className={`absolute -top-3 -left-3 w-20 h-5 ${getTapeClass()} z-20 -rotate-12`} />
      )}
      {tapePosition === 'top-right' && (
        <div className={`absolute -top-3 -right-3 w-20 h-5 ${getTapeClass()} z-20 rotate-12`} />
      )}
      {tapePosition === 'both-corners' && (
        <>
          <div className={`absolute -top-3 -left-3 w-16 h-5 ${getTapeClass()} z-20 -rotate-12`} />
          <div className={`absolute -top-3 -right-3 w-16 h-5 ${getTapeClass()} z-20 rotate-12`} />
        </>
      )}

      {/* Polaroid Card */}
      <div className="bg-[#FFFFFF] p-3 pb-8 rounded-sm shadow-polaroid border border-[#ECE2D0]/50 text-center relative group">
        <div className={`w-full ${getAspectClass()} overflow-hidden bg-[#F4EDE2] border border-[#E8DEC8] flex items-center justify-center relative`}>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={caption} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="flex flex-col items-center justify-center p-4 text-[#8C7662]">
              <span className="text-3xl mb-1">✧</span>
              <span className="font-poppins text-xs tracking-widest uppercase text-[#6A4E38]">CHRIRAM'S PORTRAIT</span>
            </div>
          )}
          {/* Subtle vintage vignette */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#3D2319]/10 via-transparent to-transparent opacity-40" />
        </div>

        {/* Caption in Playfair Display & Poppins */}
        <div className="mt-3 px-1 flex flex-col items-center">
          <p className="font-playfair text-base sm:text-lg text-[#3D2319] leading-tight font-bold tracking-wide">
            {caption}
          </p>
          {date && (
            <span className="font-poppins text-[10px] tracking-widest uppercase text-[#9C8271] mt-1 italic">
              {date}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};