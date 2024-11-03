import { useState } from 'react';
import { Heart } from 'lucide-react';
import { storyBeats } from '../../data/story-data';
import { StoryBeatCard } from './story-beat';

export function StoryTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 text-rose-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Sarah & Mike</h1>
          <p className="text-lg text-gray-600">A Modern Love Story</p>
        </div>

        <div className="space-y-8">
          {storyBeats.map((beat, index) => (
            <StoryBeatCard
              key={index}
              beat={beat}
              isActive={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}