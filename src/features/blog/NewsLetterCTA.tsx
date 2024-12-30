import { CTA, HeaderBadge, ShimmerButton } from '@/components/ui';
import { Mail } from 'lucide-react';
import React from 'react';

export const NewsLetterCTA = () => {
  return (
    <CTA variant='default'>
      <HeaderBadge heading='Get Weekly' icon={Mail} variant='secondary' />
      <h3 className='text-2xl font-bold text-foreground mb-4'>
        Get Weekly Digital Marketing Tips
      </h3>

      <p className='text-foreground/70 mb-6'>
        Join our newsletter and get expert insights on SEO, digital marketing,
        and business growth delivered straight to your inbox.
      </p>

      <form className='flex flex-col sm:flex-row gap-3'>
        <input
          type='email'
          placeholder='Enter your email'
          className='flex-1 px-4 py-2 rounded-lg input'
        />
        <ShimmerButton variant='primary'>Subscribe</ShimmerButton>
      </form>
    </CTA>
  );
};
