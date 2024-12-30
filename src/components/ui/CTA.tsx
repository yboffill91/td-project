import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib';

interface CTAProps {
  variant?: 'default' | 'green' | 'orange';
  children: React.ReactNode;
}

const CTAVariants = cva('absolute inset-0 rounded-xl sm:rounded-3xl', {
  variants: {
    variant: {
      default:
        'bg-gradient-to-br from-primary/50 via-secondary-blue/5  to-transparentt ',
      green:
        'bg-gradient-to-br from-secondary-green/50 via-secondary-green/5  to-transparentt',
      orange:
        'bg-gradient-to-br from-secondary-orange/50 via-secondary-pastel/5  to-transparentt',
    },
    defaultVariants: {
      variant: 'default',
    },
  },
});

export const CTA = ({ children, variant }: CTAProps) => {
  return (
    <section className='p-10 relative container mx-auto overflow-hidden'>
      <div className=' mx-auto p-10 sm:px-6 lg:px-8 max-w-7xl'>
        <div className=''>
          {/* Background gradient effect */}
          <div className={cn(CTAVariants({ variant }))} />
          <div className=''>
            {children}
            <div className='absolute -top-5 -right-5 w-40 h-40 bg-gradient-to-br from-blue-300/10 via-primary/30 to-secondary-blue/50 rounded-full blur-3xl'></div>
            <div className='absolute -bottom-1 -left-3 w-40 h-40 bg-gradient-to-br from-orange-300/10 via-secondary-orange/30 to-secondary-pastel/50 rounded-full blur-3xl'></div>
          </div>
        </div>
      </div>
    </section>
  );
};
