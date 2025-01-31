import { Button } from '../components/Button';
import { useStore } from '../store';

export const Ask = () => {
  const setPage = useStore((state) => state.setPage);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
      <h1 className="text-4xl font-bold">Be my valentine?</h1>
      <img src="/images/cat-valentine.jpeg" alt="valentine" width={500} className="rounded-lg shadow-lg mt-4" />
      <div className="flex flex-row gap-4 mt-4">
        <Button onClick={() => setPage('yes')}>Yes 💖</Button>
        <Button onClick={() => setPage('no')}>No 😭</Button>
      </div>
    </div>
  );
};
