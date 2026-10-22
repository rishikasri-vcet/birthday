export interface ReactionOption {
  id: number;
  text: string;
  isCorrect: boolean;
  styleClass: string;
  rotation: string;
}

export const REACTION_OPTIONS: ReactionOption[] = [
  { id: 1, text: "Maybe just a tiny smirk 😏", isCorrect: false, styleClass: "bg-[#FFF9EE] text-[#521422] border-[#E8DEC8]", rotation: "-rotate-2" },
  { id: 2, text: "I'm keeping a serious poker face 😐", isCorrect: false, styleClass: "bg-[#F7EFE1] text-[#3D2319] border-[#D9CDBB]", rotation: "rotate-1" },
  { id: 3, text: "Duh, of course you made me smile! 🥰🤍", isCorrect: true, styleClass: "bg-[#FCE8ED] text-[#6A1E2D] border-[#E8B4C0] font-bold shadow-md", rotation: "-rotate-1" },
  { id: 4, text: "I was trying NOT to blush! 🙈", isCorrect: false, styleClass: "bg-[#F3EFE6] text-[#4A1521] border-[#DFD5C6]", rotation: "rotate-3" },
  { id: 5, text: "Who, me? Never! 😜", isCorrect: false, styleClass: "bg-[#FFFDF9] text-[#593D2E] border-[#E8DEC8]", rotation: "-rotate-3" },
  { id: 6, text: "My cheeks actually hurt from smiling 🥹", isCorrect: false, styleClass: "bg-[#FAEDE8] text-[#6E2B38] border-[#EACEC5]", rotation: "rotate-2" },
  { id: 7, text: "Nah, I'm way too cool for that 😎", isCorrect: false, styleClass: "bg-[#F5F2EB] text-[#3B2219] border-[#DDD5C7]", rotation: "-rotate-1" },
  { id: 8, text: "You made me grin like a total idiot ❤️", isCorrect: false, styleClass: "bg-[#FDF6E8] text-[#7A3E1D] border-[#EEDFBF]", rotation: "rotate-1" },
  { id: 9, text: "1000/10 best birthday surprise ever ✨", isCorrect: false, styleClass: "bg-[#FBEBF0] text-[#682436] border-[#E5BDC9]", rotation: "-rotate-2" },
  { id: 10, text: "Only because you're cute 🤍", isCorrect: false, styleClass: "bg-[#FFF9EE] text-[#521422] border-[#E8DEC8]", rotation: "rotate-2" },
  { id: 11, text: "Still processing this magic... 🪄", isCorrect: false, styleClass: "bg-[#F4EFE6] text-[#422C23] border-[#DACFC0]", rotation: "-rotate-3" },
  { id: 12, text: "Wait, let me think about it... 🤔", isCorrect: false, styleClass: "bg-[#FAF5ED] text-[#543325] border-[#E5DAC9]", rotation: "rotate-1" },
  { id: 13, text: "My heart literally did a backflip 💓", isCorrect: false, styleClass: "bg-[#FDEEF2] text-[#7B1A32] border-[#EBBAC7]", rotation: "-rotate-1" },
  { id: 14, text: "I'm genuinely speechless 🥺", isCorrect: false, styleClass: "bg-[#F7F2E7] text-[#4A281E] border-[#DED1BE]", rotation: "rotate-3" },
  { id: 15, text: "No comment (okay yes I did) 🤫", isCorrect: false, styleClass: "bg-[#FFFDF7] text-[#60352A] border-[#EADFCF]", rotation: "-rotate-2" },
  { id: 16, text: "You're pure trouble, Rishika! 🤭", isCorrect: false, styleClass: "bg-[#FDF0E6] text-[#6F331F] border-[#E9CDBE]", rotation: "rotate-2" },
  { id: 17, text: "Could you tell from far away? 🫣", isCorrect: false, styleClass: "bg-[#F5EFE9] text-[#532832] border-[#DFC9D0]", rotation: "-rotate-1" },
  { id: 18, text: "Smiling from ear to ear 😁", isCorrect: false, styleClass: "bg-[#FFF8E7] text-[#744516] border-[#ECDCB9]", rotation: "rotate-1" },
  { id: 19, text: "I won't admit it out loud 🤐", isCorrect: false, styleClass: "bg-[#F8EFE4] text-[#4E2B1F] border-[#DFCFC0]", rotation: "-rotate-3" },
  { id: 20, text: "I'm the happiest birthday boy today 🎂", isCorrect: false, styleClass: "bg-[#FDEEF1] text-[#6B2033] border-[#E9B9C5]", rotation: "rotate-2" },
  { id: 21, text: "You always know how to get me 💘", isCorrect: false, styleClass: "bg-[#F9F4EB] text-[#5C3A2D] border-[#E3D7C5]", rotation: "-rotate-2" },
  { id: 22, text: "Butterflies in my stomach everywhere 🦋", isCorrect: false, styleClass: "bg-[#FBF6ED] text-[#633F31] border-[#E8DEC9]", rotation: "rotate-3" },
  { id: 23, text: "Caught red-handed smiling! 🍓", isCorrect: false, styleClass: "bg-[#FCECEE] text-[#741F33] border-[#E7BAC4]", rotation: "-rotate-1" },
  { id: 24, text: "You're impossible not to smile at 🤍", isCorrect: false, styleClass: "bg-[#FFF9F2] text-[#55271E] border-[#EBD6C7]", rotation: "rotate-1" }
];
