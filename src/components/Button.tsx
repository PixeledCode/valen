import { cn } from '../utils';

export const Button = ({
  children,
  onClick,
  onHover,
  className,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
  onHover?: () => void;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <button
      className={cn('bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300', className)}
      onClick={onClick}
      onMouseEnter={onHover}
      {...props}
    >
      {children}
    </button>
  );
};
