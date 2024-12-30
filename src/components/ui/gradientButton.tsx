import React from 'react';
import { twMerge } from 'tailwind-merge';

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  gradient?: 'blue' | 'orange' | 'green';
  href?: string;
}

const gradients = {
  blue: 'from-blue-300 via-blue-500 to-blue-700 hover:shadow-blue-500/25',
  orange:
    'from-orange-300 via-orange-500 to-orange-700 hover:shadow-orange-500/25',
  green:
    'from-emerald-300 via-emerald-500 to-emerald-700 hover:shadow-emerald-500/25',
};

export function GradientButton({
  children,
  className,
  onClick,
  gradient = 'blue',
  href,
}: GradientButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      window.location.href = href;
    }
    onClick?.(e);
  };

  const baseStyles =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-4 py-1.5 text-sm font-medium transition-all duration-300 ease-in-out hover:scale-105';

  return (
    <button
      onClick={handleClick}
      className={twMerge(
        baseStyles,
        `bg-gradient-to-br ${gradients[gradient]} text-gray-900 font-semibold`,
        className
      )}
    >
      {children}
      <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
        <div className='relative h-full w-8 bg-white/30' />
      </div>
    </button>
  );
}
