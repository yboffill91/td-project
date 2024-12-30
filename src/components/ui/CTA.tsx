import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib';

interface CTAProps {
  variant?: 'default' | 'green' | 'orange';
  children: React.ReactNode;
}

const CTAVariants = cva('container max-w-6xl mx-auto p-5 rounded-lg  ', {
  variants: {
    variant: {
      default:
        'bg-gradient-to-br from-primary/40 from-10% via-secondary-blue/5 via-30%  to-transparentt ',
      green:
        'bg-gradient-to-br from-secondary-green/40  from-10% via-secondary-green/5 via-30% to-transparentt',
      orange:
        'bg-gradient-to-br from-secondary-orange/40  from-10% via-secondary-pastel/5 via-30% to-transparentt',
    },
    defaultVariants: {
      variant: 'default',
    },
  },
});

export const CTA = ({ children, variant }: CTAProps) => {
  return (
    <section className='relative my-10'>
      <div className=''>
        <div className=''>
          {/* Background gradient effect */}
          <div className={cn(CTAVariants({ variant }))}>{children}</div>
          <div className='absolute top-7 right-5 w-40 h-40 bg-gradient-to-br from-blue-300/10 from-10% via-primary/30 via-70% to-secondary-blue/50 rounded-full blur-3xl'></div>
          <div className='absolute md:flex hidden bottom-10 left-30 w-40 h-40 bg-gradient-to-br from-blue-300/10 from-10% via-primary/30 via-70% to-secondary-blue/50 rounded-full blur-3xl '></div>
        </div>
      </div>
    </section>
  );
};
