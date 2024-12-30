import React from 'react';

interface FloatingCardsProps {
  children: React.ReactNode;
  title: string;
  content: string;
}

export const FloatingCards = ({
  children,
  title,
  content,
}: FloatingCardsProps) => {
  return (
    <div className='flex items-center space-x-3 flex-shrink-0 bg-card/50 backdrop-blur-xl backdrop-filter px-4 py-2 rounded-lg border border-foreground/10'>
      <div className='icons-hero-holder'>{children}</div>
      <div>
        <p className='text-xs sm:text-sm text-foreground/70'>{title}</p>
        <p className='text-xs sm:text-sm font-semibold text-foreground'>
          {content}
        </p>
      </div>
    </div>
  );
};
