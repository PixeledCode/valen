import { Button } from '../components/Button';
import { useStore } from '../store';

export const Yes = () => {
  const setPage = useStore((state) => state.setPage);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold">Lesss goooo!</h1>
      <img src="/images/happy-cat.gif" alt="happy cat" width={500} />
      <div className="flex flex-row gap-4 mt-4">
        <Button onClick={() => setPage('food')}>Continue</Button>
      </div>
    </div>
  );
};
