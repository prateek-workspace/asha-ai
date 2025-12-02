import React, { useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  duration: string;
  lang: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, duration, lang }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 100);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-3 flex items-center gap-3 shadow-sm transition-colors">
      <button 
        onClick={togglePlay}
        className={`h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isPlaying ? 'bg-pink-600 text-white' : 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'}`}
      >
        {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
      </button>
      
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <h4 className="text-sm font-medium text-gray-800 dark:text-white truncate">{title}</h4>
          <span className="text-xs text-gray-400">{duration}</span>
        </div>
        
        {/* Progress Bar */}
        <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-pink-500 transition-all duration-300"
            style={{ width: `${isPlaying ? progress : 0}%` }}
          ></div>
        </div>
        
        <div className="flex items-center gap-1 mt-1">
          <Volume2 size={10} className="text-gray-400" />
          <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase">{lang}</span>
        </div>
      </div>
    </div>
  );
};
