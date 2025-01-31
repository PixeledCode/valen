import { useEffect, useRef } from 'react';
import { useStore } from '../store';

export function Result() {
  const { submitSelections } = useStore();
  const hasSubmitted = useRef(false);

  useEffect(() => {
    if (!hasSubmitted.current) {
      hasSubmitted.current = true;
      submitSelections().catch((error) => {
        console.error('Failed to save selections:', error);
      });
    }
  }, [submitSelections]);

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
      <h1 className="text-4xl font-bold">Thank you for being my girlfriend 💖</h1>
      <img src="/images/cat-hug.gif" alt="hug" width={500} className="rounded-lg shadow-lg mt-4" />
    </div>
  );
}
