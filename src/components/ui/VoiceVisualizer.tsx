import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VoiceVisualizerProps {
  isListening: boolean;
}

export const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({ isListening }) => {
  if (!isListening) return null;

  return (
    <div className="flex items-center justify-center gap-1 h-12">
      {[1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="w-2 bg-pink-500 rounded-full"
          animate={{
            height: [10, 30, 10],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
};
