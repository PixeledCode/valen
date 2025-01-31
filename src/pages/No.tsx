import { Button } from '../components/Button';
import { useStore } from '../store';

export const No = () => {
  const setPage = useStore((state) => state.setPage);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Awwww noooo!</h1>
      <img src="/images/sad-cat.jpg" alt="sad cat" width={500} className="rounded-lg shadow-lg mt-4" />
      <div className="flex flex-row gap-4 mt-4">
        <Button onClick={() => setPage('yes')}>I changed my mind 💖</Button>
      </div>
    </div>
  );
};
