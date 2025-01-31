import { Button } from '../components/Button';
import { useStore } from '../store';
import { cn } from '../utils';

type Activity = 'movie' | 'game' | 'chill' | 'walk' | 'park' | null;

const activity: {
  name: Activity;
  image: string;
}[] = [
  {
    name: 'movie',
    image: '/images/activity/movie.jpg',
  },
  {
    name: 'game',
    image: '/images/activity/game.avif',
  },
  {
    name: 'chill',
    image: '/images/activity/chill.png',
  },
  {
    name: 'walk',
    image: '/images/activity/walk.jpg',
  },
  {
    name: 'park',
    image: '/images/activity/park.jpg',
  },
];

export const Activity = () => {
  const setActivity = useStore((state) => state.setActivity);
  const selectedActivity = useStore((state) => state.activity);
  const setPage = useStore((state) => state.setPage);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">What are we doing after food?</h1>
      <div className="grid grid-cols-3 gap-4 md:gap-8 mt-4">
        {activity.map((item) => (
          <Button
            key={item.name}
            onClick={() => setActivity(item.name)}
            className={cn(item.name === selectedActivity ? 'bg-gray-300 border-2 border-gray-400' : 'bg-transparent')}
          >
            <img src={item.image} alt={item.image || 'food'} className="object-cover h-[calc(100%-20px)]" />
            <span className="text-lg font-bold capitalize">{item.name}</span>
          </Button>
        ))}
      </div>
      <Button
        onClick={() => {
          if (selectedActivity) {
            setPage('result');
          } else {
            alert('Just talking over food is not enough');
          }
        }}
        className="mt-4"
      >
        Next
      </Button>
    </div>
  );
};
