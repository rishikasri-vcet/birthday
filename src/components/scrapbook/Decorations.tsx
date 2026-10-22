import React from 'react';

export const WashiTapeStrip: React.FC<{
  color?: 'blush' | 'burgundy' | 'parchment' | 'gold' | 'celestial';
  width?: string;
  className?: string;
  rotation?: string;
}> = ({ color = 'blush', width = 'w-24', className = '', rotation = '-rotate-2' }) => {
  const getColor = () => {
    switch (color) {
      case 'burgundy': return 'bg-[#4E1422]/80 border-white/30';
      case 'parchment': return 'bg-[#D9C4A6]/80 border-white/40';
      case 'gold': return 'bg-[#C9A96E]/80 border-white/50 shadow-sm';
      case 'celestial': return 'bg-[#2A233C]/80 border-white/30';
      default: return 'bg-[#D49AA8]/80 border-white/40';
    }
  };

  return (
    <div className={`h-6 ${width} ${getColor()} border-l-2 border-r-2 border-dashed shadow-sm backdrop-blur-[1px] ${rotation} ${className}`} />
  );
};

export const PostageStamp: React.FC<{
  text?: string;
  subtext?: string;
  icon?: string;
  className?: string;
  rotation?: string;
}> = ({ text = "CHRIRAM", subtext = "Our Little World", icon = "✨", className = "", rotation = "rotate-3" }) => {
  return (
    <div className={`relative inline-block p-2 bg-[#FFFDF9] border border-[#DFCBB5] shadow-md ${rotation} ${className}`}>
      <div className="border border-dashed border-[#C49C77]/60 p-2 text-center min-w-[70px]">
        <div className="text-xl mb-0.5">{icon}</div>
        <div className="font-playfair text-[9px] font-bold tracking-widest text-[#4E1422] uppercase">{text}</div>
        <div className="font-poppins text-[7px] tracking-wider text-[#8A6A55]">{subtext}</div>
      </div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full border border-[#8B3A4A]/50 flex items-center justify-center pointer-events-none rotate-12">
        <span className="text-[6px] font-playfair text-[#8B3A4A] tracking-tighter uppercase font-semibold">Our Little World</span>
      </div>
    </div>
  );
};

export const WaxSealButton: React.FC<{
  onClick?: () => void;
  label?: string;
  icon?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}> = ({ onClick, label, icon = "✧", className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-sm',
    md: 'w-14 h-14 text-lg',
    lg: 'w-18 h-18 text-2xl'
  }[size];

  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center justify-center wax-seal-celestial cursor-pointer select-none ${sizeClasses} ${className}`}
      title={label || "Break Wax Seal"}
    >
      <span className="text-[#F8F2DE] drop-shadow-sm group-hover:scale-110 transition-transform font-playfair font-bold">
        {icon}
      </span>
      {label && (
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-dancing text-base text-[#4E1422] font-semibold opacity-90 group-hover:opacity-100">
          {label}
        </span>
      )}
    </button>
  );
};

export const SatinBow: React.FC<{ className?: string; color?: string }> = ({ className = "", color = "#9E4760" }) => {
  return (
    <svg className={`inline-block ${className}`} width="38" height="32" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 14C18 14 13 8 7 8C3 8 1 10.5 1 13C1 16 4.5 17 9 16C13.5 15 18 14 18 14Z" fill={color} fillOpacity="0.88" stroke="#4E1422" strokeWidth="0.8"/>
      <path d="M18 14C18 14 23 8 29 8C33 8 35 10.5 35 13C35 16 31.5 17 27 16C22.5 15 18 14 18 14Z" fill={color} fillOpacity="0.88" stroke="#4E1422" strokeWidth="0.8"/>
      <path d="M18 14C16.5 17 12 25 10 29C11.5 29 14.5 27 16 23C17 20 18 16 18 14Z" fill={color} fillOpacity="0.82" stroke="#4E1422" strokeWidth="0.8"/>
      <path d="M18 14C19.5 17 24 25 26 29C24.5 29 21.5 27 20 23C19 20 18 16 18 14Z" fill={color} fillOpacity="0.82" stroke="#4E1422" strokeWidth="0.8"/>
      <circle cx="18" cy="14" r="3.5" fill="#75182D" stroke="#350C16" strokeWidth="0.8"/>
    </svg>
  );
};

/* Aesthetic Pinterest Sticker Pack */
export const CelestialSticker: React.FC<{
  type: 'crescent' | 'starburst' | 'botanical' | 'paperclip' | 'constellation';
  className?: string;
  style?: React.CSSProperties;
}> = ({ type, className = '', style }) => {
  if (type === 'crescent') {
    return (
      <div className={`inline-block select-none filter drop-shadow-md hover:scale-110 transition-transform ${className}`} style={style}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5">
          <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" fill="#F8F2DE"/>
        </svg>
      </div>
    );
  }
  if (type === 'starburst') {
    return (
      <div className={`inline-block select-none filter drop-shadow-sm hover:scale-110 transition-transform ${className}`} style={style}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#C9A96E" stroke="#967843" strokeWidth="0.5">
          <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8Z"/>
        </svg>
      </div>
    );
  }
  if (type === 'botanical') {
    return (
      <div className={`inline-block select-none filter drop-shadow-sm hover:scale-105 transition-transform ${className}`} style={style}>
        <svg width="32" height="38" viewBox="0 0 24 30" fill="none" stroke="#7A6652" strokeWidth="1.2">
          <path d="M12 28V4M12 4C9 8 5 11 5 16C5 20 8 22 12 22M12 4C15 8 19 11 19 16C19 20 16 22 12 22" fill="#E8DEC8" fillOpacity="0.4"/>
        </svg>
      </div>
    );
  }
  if (type === 'paperclip') {
    return (
      <div className={`inline-block select-none filter drop-shadow hover:scale-105 transition-transform ${className}`} style={style}>
        <svg width="20" height="42" viewBox="0 0 14 36" fill="none" stroke="#A99066" strokeWidth="2.2" strokeLinecap="round">
          <path d="M3 10V28C3 31.3 5.7 34 9 34C12.3 34 15 31.3 15 28V6C15 3.8 13.2 2 11 2C8.8 2 7 3.8 7 6V26C7 27.1 7.9 28 9 28C10.1 28 11 27.1 11 26V10" />
        </svg>
      </div>
    );
  }
  return (
    <div className={`inline-block select-none text-[#C9A96E] hover:scale-110 transition-transform ${className}`} style={style}>
      ✦ ✧ ✦
    </div>
  );
};