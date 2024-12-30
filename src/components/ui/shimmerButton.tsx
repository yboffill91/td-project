'use client';
import { twMerge } from 'tailwind-merge';

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  href?: string;
}

export function ShimmerButton({
  children,
  className,
  onClick,
  variant = 'primary',
  href,
}: ShimmerButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      window.location.href = href;
    }
    onClick?.(e);
  };

  const baseStyles =
    'group/button relative inline-flex items-center justify-center overflow-hidden rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-xl';

  const variantStyles = {
    primary:
      'gradient-primary text-primary-foreground font-semibold hover:-translate-y-1 hover:shadow-primary/10 ',
    secondary:
      'bg-card/50 backdrop-blur-sm border border-primary/60 text-card-foreground/70  hover:text-card-foreground hover:bg-primary/20 hover:border-ring hover:shadow-primary/15',
  };

  return (
    <button
      onClick={handleClick}
      className={twMerge(baseStyles, variantStyles[variant], className)}
    >
      {children}
      <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-12deg)_translateX(100%)]'>
        <div
          className={`relative h-full w-8 ${
            variant === 'primary' ? 'bg-primary-foreground/50' : 'bg-ring/20'
          }`}
        />
      </div>
    </button>
  );
}
