import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.4);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Soft romantic guitar/harp synth melody using Web Audio API (zero external network dependencies)
  const playRomanticChord = (notes: number[]) => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.08 * volume, ctx.currentTime + idx * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.12 + 1.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 2.0);
    });
  };

  const romanticProgression = [
    [261.63, 329.63, 392.00, 523.25], // C major
    [220.00, 261.63, 329.63, 440.00], // A minor
    [174.61, 220.00, 261.63, 349.23], // F major
    [196.00, 246.94, 293.66, 392.00], // G major
  ];

  const togglePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      let step = 0;
      playRomanticChord(romanticProgression[0]);
      intervalRef.current = window.setInterval(() => {
        step = (step + 1) % romanticProgression.length;
        playRomanticChord(romanticProgression[step]);
      }, 2400);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 bg-[#FFFDF9]/95 backdrop-blur-md px-4 py-2.5 rounded-full shadow-scrapbook border border-[#EADBCA] flex items-center gap-3">
      <button
        onClick={togglePlay}
        className="w-8 h-8 rounded-full bg-[#521422] text-[#FFFDF9] flex items-center justify-center hover:bg-[#682436] transition-colors"
        title={isPlaying ? "Pause Romantic Melody" : "Play Romantic Melody"}
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
      </button>

      <div className="flex flex-col pr-1">
        <span className="font-serif text-xs font-semibold text-[#521422] flex items-center gap-1">
          <Music size={11} className={isPlaying ? "animate-spin text-[#9E4760]" : "text-[#8C6D53]"} />
          Our Melody 🤍
        </span>
        <span className="font-handwriting text-sm text-[#8C6D53] leading-none">
          {isPlaying ? "playing softly..." : "tap to listen"}
        </span>
      </div>

      <button
        onClick={() => setVolume(volume === 0 ? 0.4 : 0)}
        className="text-[#8C6D53] hover:text-[#521422] p-1"
      >
        {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
    </div>
  );
};
