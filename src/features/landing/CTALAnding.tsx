import { ShimmerButton } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import { CTA } from '@/components/ui';

export const CTALanding = () => {
  return (
    <CTA variant='default'>
      <div className='grid lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
        {/* Content Column */}
        <div className='text-center lg:text-left'>
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            <span className='text-oreground'>Don&apost Let Your</span>{' '}
            <span className='gradient-text'>Business</span>{' '}
            <span className='text-foreground'>Fall Behind</span>
          </h2>
          <p className='text-lg sm:text-xl text-foreground/50 mb-6 sm:mb-8'>
            In today&aposs digital world, your online presence is your
            competitive advantage. Let&aposs make it count.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4'>
            <ShimmerButton
              variant='primary'
              className='w-full sm:w-auto px-6 py-2.5 text-sm font-medium whitespace-nowrap'
            >
              Get My Free Analysis
            </ShimmerButton>
            <ShimmerButton
              variant='secondary'
              className='w-full sm:w-auto px-6 py-2.5 text-sm font-medium whitespace-nowrap inline-flex items-center justify-center gap-2'
            >
              View Success Stories
              <ArrowRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
            </ShimmerButton>
          </div>
        </div>

        {/* Right Column - Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0'>
          <div className='text-center p-6 rounded-xl shadow-lg'>
            <div className='text-3xl sm:text-4xl font-bold gradient-text mb-2'>
              52%
            </div>
            <p className='text-xs sm:text-sm text-foreground/70'>
              Companies Without Website Lose Sales
            </p>
          </div>
          <div className='text-center p-6  rounded-xl shadow-lg'>
            <div className='text-4xl font-bold gradient-orange mb-2'>78%</div>
            <p className='text-sm text-foreground/70'>Local Search Purchases</p>
          </div>
          <div className='text-center p-6 rounded-xl shadow-lg'>
            <div className='text-4xl font-bold gradient-text mb-2'>30%</div>
            <p className='text-sm text-foreground/70'>
              More Revenue with Online Presence
            </p>
          </div>
          <div className='text-center p-6 rounded-xl shadow-lg'>
            <div className='text-4xl font-bold gradient-orange mb-2'>93%</div>
            <p className='text-sm text-foreground/70'>Searches are Online</p>
          </div>
        </div>
      </div>
    </CTA>
  );
};
