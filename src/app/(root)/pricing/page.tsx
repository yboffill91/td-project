import { BackgroundEffect } from '@/features/about';
import {
  PricingCTA,
  PricingFAQ,
  PricingFeatures,
  PricingPlans,
} from '@/features/pricing';
import React from 'react';

const PricingPage = () => {
  return (
    <main className='relative pt-20'>
      <BackgroundEffect />
      <div className='relative'>
        <PricingPlans />
        <PricingFeatures />
        <PricingFAQ />
        <PricingCTA />
      </div>
    </main>
  );
};

export default PricingPage;
