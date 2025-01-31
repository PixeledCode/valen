import { cn } from '../utils';

export const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      className={cn('bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
