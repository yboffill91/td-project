import {
  AboutHero,
  BackgroundEffect,
  TeamSection,
  TimeLine,
  Values,
  Vision,
  WorkTogetherCTA,
} from '@/features/about';
import {} from '@/features/about/TimeLine';
import React from 'react';

const AboutPage = () => {
  return (
    <main className='relative container mx-auto'>
      <BackgroundEffect />
      <div className='relative pt-32 pb-12'>
        <div className='text-center'>
          <AboutHero />
        </div>
        <TimeLine />
        <TeamSection />
        <Values />
        <Vision />
        <WorkTogetherCTA />
      </div>
    </main>
  );
};

export default AboutPage;
