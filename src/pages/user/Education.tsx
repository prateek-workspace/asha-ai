import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { AUDIO_LESSONS } from '../../lib/mockData';
import { AudioPlayer } from '../../components/ui/AudioPlayer';

export const Education = () => {
  const [filter, setFilter] = useState('All');

  const filteredLessons = filter === 'All' 
    ? AUDIO_LESSONS 
    : AUDIO_LESSONS.filter(l => l.category.includes(filter) || filter === l.category);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Health Library</h2>
        <div className="bg-white p-2 rounded-full shadow-sm">
            <BookOpen size={20} className="text-pink-600" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
        {['All', 'Menstrual', 'Nutrition', 'Maternal', 'Hygiene'].map((cat, i) => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === cat 
                ? 'bg-pink-600 text-white shadow-md' 
                : 'bg-white text-gray-600 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredLessons.map((lesson) => (
          <AudioPlayer 
            key={lesson.id}
            title={lesson.title}
            duration={lesson.duration}
            lang={lesson.lang}
          />
        ))}
      </div>
      
      {filteredLessons.length === 0 && (
        <div className="text-center text-gray-400 py-10">
            No lessons found in this category.
        </div>
      )}
    </div>
  );
};
