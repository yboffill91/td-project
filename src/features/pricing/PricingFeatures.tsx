'use client';
import { HeaderBadge } from '@/components/ui';
import { features } from '@/features/pricing/constants';
import { ArrowRight, Rocket } from 'lucide-react';
import { useState } from 'react';

export const PricingFeatures = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <section className='py-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <HeaderBadge
            heading='Powerful Features'
            icon={Rocket}
            variant='secondary'
          />

          <h2 className='text-4xl font-bold mb-6'>
            <span className='text-foreground'>Everything You Need to</span>{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-secondary-green'>
              Succeed Online
            </span>
          </h2>
          <p className='text-xl text-foreground/70'>
            Comprehensive tools and features designed to help your business
            thrive in the digital world
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
          {features.map(
            ({ icon: IconElement, title, description, details }, index) => (
              <div
                key={title}
                className='group relative bg-card/50 rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1'
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className='flex flex-col items-center text-center'>
                  <div className='p-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-3'>
                    <IconElement className='size-6 text-primary-foreground' />
                  </div>
                  <h3 className='text-lg font-semibold text-foreground mb-2'>
                    {title}
                  </h3>
                  <p className='text-foreground/70 text-sm mb-4'>
                    {description}
                  </p>

                  {hoveredFeature === index && (
                    <div className='absolute inset-0 bg-secondary-green/50 backdrop-filter backdrop-blur-3xl rounded-xl p-6 transform transition-all duration-300 flex flex-col items-center justify-center text-primary-foreground'>
                      <h4 className='font-semibold mb-4'>{title} Includes:</h4>
                      <ul className='text-sm space-y-2'>
                        {details.map((detail, idx) => (
                          <li key={idx} className='flex items-center gap-2'>
                            <ArrowRight className='w-4 h-4' />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
