import { Button } from '../components/Button';
import { useStore } from '../store';
import { cn } from '../utils';

type Food = 'indian' | 'italian' | 'mexican' | 'asian' | 'brazilian' | 'burmese' | null;

const food: {
  name: Food;
  image: string;
}[] = [
  {
    name: 'indian',
    image: '/images/food/indian.jpg',
  },
  {
    name: 'italian',
    image: '/images/food/italian.png',
  },
  {
    name: 'mexican',
    image: '/images/food/mexican.jpg',
  },
  {
    name: 'asian',
    image: '/images/food/asian.avif',
  },
  {
    name: 'burmese',
    image: '/images/food/burmese.jpg',
  },
  {
    name: 'brazilian',
    image: '/images/food/brazilian.jpg',
  },
];

export const Food = () => {
  const setFood = useStore((state) => state.setFood);
  const selectedFood = useStore((state) => state.food);
  const setPage = useStore((state) => state.setPage);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">What are we eating?</h1>
      <div className="grid grid-cols-3 gap-4 md:gap-8 mt-4">
        {food.map((item) => (
          <Button
            key={item.name}
            onClick={() => setFood(item.name)}
            className={cn(item.name === selectedFood ? 'bg-gray-300 border-2 border-gray-400' : 'bg-transparent')}
          >
            <img src={item.image} alt={item.image || 'food'} className="object-cover h-[calc(100%-20px)]" />
            <span className="text-lg font-bold capitalize">{item.name}</span>
          </Button>
        ))}
      </div>
      <Button
        onClick={() => {
          if (selectedFood) {
            setPage('activity');
          } else {
            alert('A date is not complete without food');
          }
        }}
        className="mt-4"
      >
        Next
      </Button>
    </div>
  );
};
