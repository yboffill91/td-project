import { CTA, HeaderBadge, ShimmerButton } from '@/components/ui';
import { Star, Shield, Clock } from 'lucide-react';
export const NewsLetter = () => {
  return (
    <CTA variant='default'>
      <div className='relative p-8 sm:p-12 '>
        <div className='grid lg:grid-cols-5 gap-12 items-center'>
          {/* Content Column */}
          <div className='lg:col-span-3 space-y-6 text-center lg:text-left'>
            <HeaderBadge
              heading='Join 370+ subscribers'
              icon={Star}
              variant='default'
            />

            <h2 className='text-4xl font-bold'>
              <span className='text-card-foreground'>Get Weekly</span>{' '}
              <span className='gradient-text'>Digital Growth Tips</span>
            </h2>

            <div className='space-y-4 flex flex-col items-center lg:items-start'>
              <div className='flex items-center gap-3'>
                <Clock className='w-5 h-5 text-primary' />
                <p className='text-card-foreground/70'>
                  Fresh content every Wednesday
                </p>
              </div>
              <div className='flex items-center gap-3'>
                <Shield className='w-5 h-5 text-primary' />
                <p className='text-card-foreground/70'>
                  No spam, unsubscribe anytime
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className='lg:col-span-2'>
            <form className='bg-card p-6 rounded-lg shadow-lg'>
              <div className=''>
                <div className=''>
                  <input
                    type='email'
                    placeholder='your@email.com'
                    className='w-full px-4 py-3 rounded-lg input transition-all mb-8 border-ring border focus:outline-none focus:bg-card'
                  />
                </div>
                <ShimmerButton variant='primary' className='w-full py-4 mb-3'>
                  Get Free Tips
                </ShimmerButton>
              </div>
              <p className='text-sm text-card-foreground/70 text-center'>
                Join 370+ professionals growing their business
              </p>
            </form>
          </div>
        </div>
      </div>
    </CTA>
  );
};
