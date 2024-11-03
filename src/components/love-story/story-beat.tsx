import { StoryBeat } from '../../types/story';
import { Card, CardContent } from '../ui/card';

interface StoryBeatProps {
  beat: StoryBeat;
  isActive: boolean;
  onClick: () => void;
}

export function StoryBeatCard({ beat, isActive, onClick }: StoryBeatProps) {
  const Icon = beat.icon;

  return (
    <Card
      className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
        isActive ? 'border-rose-300' : 'border-gray-200'
      }`}
      onClick={onClick}
    >
      <CardContent>
        <div className="flex items-center gap-4 mb-4">
          <Icon className="w-6 h-6 text-rose-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{beat.title}</h2>
            <p className="text-sm text-gray-500">{beat.date}</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">{beat.content}</p>
      </CardContent>
    </Card>
  );
}