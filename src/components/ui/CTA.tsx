import React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib';

interface CTAProps {
  variant?: 'default' | 'green' | 'orange';
  children: React.ReactNode;
}

const CTAVariants = cva(' ', {
  variants: {
    variant: {
      default:
        'bg-gradient-to-tr from-primary   via-transparent via-50% to-primary',

      green:
        'bg-gradient-to-tr from-secondary  via-transparent via-50% to-secondary',
      orange:
        'bg-gradient-to-tr from-secondary-orange   via-transparent via-50% to-secondary-orange',
    },
    defaultVariants: {
      variant: 'default',
    },
  },
});

export const CTA = ({ children, variant }: CTAProps) => {
  return (
    <section className='relative my-10 container mx-auto'>
      <div className=''>
        <div className=''>
          {/* Background gradient effect */}
          <div
            className={cn(
              'relative container max-w-6xl mx-auto p-[2px] rounded-lg',
              CTAVariants({ variant })
            )}
          >
            <div className='bg-card rounded-lg p-3 '>{children}</div>

            <div
              className={cn(
                'absolute -bottom-10 -right-10 size-40 -z-50 rounded-full blur-3xl animate-pulse',
                CTAVariants({ variant })
              )}
            />
            <div
              className={cn(
                'absolute md:flex hidden -top-10 -left-10 size-40 -z-50 blur-3xl rounded-full animate-pulse',
                CTAVariants({ variant })
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
