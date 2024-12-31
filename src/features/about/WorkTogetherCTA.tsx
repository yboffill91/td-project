import { CTA, HeaderBadge, ShimmerButton } from '@/components/ui';
import { ArrowRight, Rocket } from 'lucide-react';
import React from 'react';
import { stats } from '@/features/about/constants';

export const WorkTogetherCTA = () => {
  return (
    <CTA variant='orange'>
      <div className='flex flex-col items-center justify-center text-center'>
        <HeaderBadge
          heading="Let's Grow Together"
          icon={Rocket}
          variant='secondaryOrange'
        />

        <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
          <span className='text-foreground'>Ready to Transform Your</span>{' '}
          <span className='gradient-orange'>Digital Presence?</span>
        </h2>

        <p className='text-xl text-foreground/50 mb-8'>
          Join hundreds of businesses that have already transformed their
          digital presence with our innovative solutions.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4'>
          <ShimmerButton
            variant='primary'
            className='w-full sm:w-auto px-6 py-2.5 text-sm whitespace-nowrap inline-flex items-center justify-center gap-2 text-center'
          >
            Start Your Journey
            <ArrowRight className='w-4 h-4' />
          </ShimmerButton>
        </div>
      </div>

      {/* Stats Column */}
      <div className='grid grid-cols-2 gap-6 max-w-96 py-5 mx-auto'>
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className='text-center p-4 sm:p-6 rounded-xl shadow-lg flex flex-col items-center bg-card/20'
          >
            <div className='flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-2'>
              <div className='p-2 bg-gradient-to-br from-orange-300 via-secondary-orange to-secondary-pastel rounded-lg'>
                <Icon className='size-8 text-secondary-foreground' />
              </div>
              <span className='text-2xl sm:text-3xl font-bold gradient-orange'>
                {value}
              </span>
            </div>
            <p className='text-sm text-foreground/70'>{label}</p>
          </div>
        ))}
      </div>
    </CTA>
  );
};
