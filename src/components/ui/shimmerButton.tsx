'use client';
import { twMerge } from 'tailwind-merge';

interface ShimmerButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary' | 'green' | 'orange';
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
    'group/button relative inline-flex items-center  justify-start overflow-hidden rounded-lg md:px-4 px-2 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out hover:shadow-xl bg-gradient-to-br';

  const variantStyles = {
    primary:
      'from-primary via-blue-400 to-secondary-blue text-primary-foreground font-semibold hover:-translate-y-1 hover:shadow-primary/10 ',
    green:
      'from-secondary via-emerald-400 to-secondary-green text-primary-foreground font-semibold hover:-translate-y-1 hover:shadow-green/10 ',
    orange:
      'from-secondary-pastel via-orange-400 to-secondary-orange text-primary-foreground font-semibold hover:-translate-y-1 hover:shadow-secondary-orange/10 ',

    secondary:
      'border border-accent/50 bg-accent/30 text-foreground shadow-sm hover:bg-card  hover:text-card-foreground',
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
            variant === 'primary'
              ? 'bg-primary-foreground/50'
              : 'bg-primary-foreground/30'
          }`}
        />
      </div>
    </button>
  );
}
