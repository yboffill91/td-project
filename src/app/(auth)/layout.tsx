import React from 'react';
import { ReactNode } from 'react';
import { ToastProvider } from '@/providers/ToastProvider';
import { ImageSlider } from '@/features/auth';
import OportunitiesSlider from '@/features/auth/forms/OportunitiesSlider';

export default function AAuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ToastProvider />
      <div className='min-h-[100dvh] flex md:flex-row flex-col-reverse'>
        <ImageSlider />
        <section className='md:w-1/2 lg:w-1/3 w-screen flex bg-card md:h-[calc(100vh] h-auto items-center justify-center pb-4'>
          {children}
        </section>
        <section
          className='md:w-1/2 lg:w-2/3 w-screen flex bg-background/50 md:h-[calc(100vh)] 
        justify-center items-center h-[75dvh] md:mt-auto mt-4  
        '
        >
          <OportunitiesSlider />
        </section>
      </div>
    </>
  );
}
