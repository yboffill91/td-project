import { HeaderBadge, ShimmerButton } from '@/components/ui';
import { ArrowRight, Star } from 'lucide-react';
import React from 'react';

export const AboutHero = () => {
  return (
    <div className='text-center min-h-[60dvh]'>
      <HeaderBadge heading='Our Journey' icon={Star} />

      <h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
        <span className='block text-foreground'>From Dreams</span>
        <span className='block gradient-text pb-6'>To Digital Excellence</span>
      </h1>

      <p className='text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed text-pretty'>
        A journey of <strong>transformation</strong>,{' '}
        <strong>resilience</strong>, and <strong>innovation</strong>. Our story
        is <strong>more than just business growth</strong>—it&apos;s about{' '}
        <strong>turning challenges</strong> into <strong>opportunities</strong>{' '}
        and helping others <strong>succeed</strong> in the{' '}
        <strong>digital world</strong>.
      </p>

      <ShimmerButton
        variant='primary'
        className='px-6 py-2.5 text-sm font-medium inline-flex items-center gap-2'
      >
        Start Your Journey
        <ArrowRight width={20} height={20} />
      </ShimmerButton>
    </div>
  );
};
