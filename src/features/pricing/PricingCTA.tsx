import { Button, CTA, HeaderBadge, ShimmerButton } from '@/components/ui';
import { ArrowRight, Rocket } from 'lucide-react';
import React from 'react';

export const PricingCTA = () => {
  return (
    <CTA variant='green'>
      {/* Content Column */}
      <div className='text-center lg:text-left flex flex-col items-center justify-center'>
        <HeaderBadge
          heading='Get Started Today'
          icon={Rocket}
          variant='secondary'
        />

        <h2 className='text-3xl sm:text-4xl font-bold mb-6'>
          <span className='text-foreground'>Ready to</span>{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-br from-emerald-700 via-secondary to-secondary-green'>
            Transform
          </span>{' '}
          <span className='text-foreground'>Your Business?</span>
        </h2>

        <p className='text-xl text-foreground/70 mb-8'>
          Join hundreds of businesses that have already transformed their
          digital presence with our innovative solutions.
        </p>

        <div className='flex flex-col sm:flex-row items-center gap-4 justify-center'>
          <ShimmerButton
            variant='primary'
            className='w-full sm:w-auto px-6 py-2.5 text-sm font-medium whitespace-nowrap inline-flex items-center justify-center gap-2 !bg-gradient-to-tr !from-emerald-700 !via-secondary !to-secondary-green hover:!shadow-secondary-orange/25'
          >
            Start Free Trial
            <ArrowRight className='w-4 h-4' />
          </ShimmerButton>
          <Button
            variant='outline'
            size={'lg'}
            className='w-full sm:w-auto px-6 py-2.5 text-sm font-medium whitespace-nowrap'
          >
            Talk to Sales
          </Button>
        </div>
      </div>

      {/* Stats Column */}
      <div className='grid sm:grid-cols-4 grid-cols-2 gap-4 mt-5 max-w-4xl mx-auto'>
        <div className='text-center p-6 bg-card/20 backdrop-filter backdrop-blur-3xl rounded-xl shadow-lg'>
          <div className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-700 via-secondary to-secondary-green  mb-2'>
            30+
          </div>
          <p className='text-sm text-foreground/70'>Active Features</p>
        </div>
        <div className='text-center p-6 bg-card/20 backdrop-filter backdrop-blur-3xl rounded-xl shadow-lg'>
          <div className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-700 via-secondary to-secondary-green mb-2'>
            24/7
          </div>
          <p className='text-sm text-foreground/70'>Expert Support</p>
        </div>
        <div className='text-center p-6 bg-card/20 backdrop-filter backdrop-blur-3xl rounded-xl shadow-lg'>
          <div className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-700 via-secondary to-secondary-green mb-2'>
            99%
          </div>
          <p className='text-sm text-foreground/70'>Satisfaction Rate</p>
        </div>
        <div className='text-center p-6 bg-card/20 backdrop-filter backdrop-blur-3xl rounded-xl shadow-lg'>
          <div className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-emerald-700 via-secondary to-secondary-green mb-2'>
            14d
          </div>
          <p className='text-sm text-foreground/70'>Free Trial</p>
        </div>
      </div>
    </CTA>
  );
};
