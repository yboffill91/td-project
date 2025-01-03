import { HeaderBadge } from '@/components/ui';
import { BarChart } from 'lucide-react';
import Image from 'next/image';

export function Benefits() {
  return (
    <section className='pt-32 pb-10 relative overflow-hidden '>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]'>
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-12 sm:mb-20'>
          <HeaderBadge
            heading='Data-Driven Success Stories '
            variant='secondaryOrange'
            icon={BarChart}
          />
          <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
            <span className='text-foreground'>Transforming Businesses</span>{' '}
            <span className='gradient-text'>With Data</span>
          </h2>
        </div>

        {/* Content Container */}
        <div className='space-y-32'>
          {/* SEO Benefits */}
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center text-center lg:text-left'>
            <div className='max-w-xl mx-auto lg:mx-0'>
              <h3 className='text-2xl sm:text-3xl font-bold mb-6'>
                <div className='flex flex-col items-center lg:items-start'>
                  <span className='gradient-orange'>
                    Search Engine Optimization
                  </span>
                </div>
                <span className='block text-base font-medium text-foreground/70 mt-2'>
                  Industry-Leading SEO Performance Metrics
                </span>
              </h3>

              <div className='space-y-16'>
                {' '}
                {/* Espacio fijo entre bloques de estadísticas */}
                <div>
                  <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 '>
                    <span className='text-5xl sm:text-6xl font-bold gradient-text'>
                      93%
                    </span>
                    <span className='text-xl sm:text-2xl font-semibold tetx-foreground mt-2'>
                      Start with Search
                    </span>
                  </div>
                  <p className='text-foreground mb-2'>
                    <span className='font-semibold'>Industry Fact:</span> 93% of
                    online experiences begin with a search engine (Forrester
                    Research).
                  </p>
                  <p className='text-foreground/50'>
                    <span className='font-semibold'>Our Impact:</span> Boost web
                    traffic by up to 300% with our effective SEO strategy.
                  </p>
                </div>
                <div>
                  <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4'>
                    <span className='text-5xl sm:text-6xl font-bold gradient-orange'>
                      75%
                    </span>
                    <span className='text-xl sm:text-2xl font-semibold text-foreground mt-2'>
                      Trust Factor
                    </span>
                  </div>
                  <p className='text-foreground/70 mb-2 text-center sm:text-left'>
                    <span className='font-semibold'>Industry Fact:</span> 75% of
                    users never scroll past the first page of search results.
                  </p>
                  <p className='text-foreground/70 text-center sm:text-left'>
                    <span className='font-semibold'>Our Impact:</span> 89% of
                    our clients reach page 1 within 6 months.
                  </p>
                </div>
              </div>
            </div>

            <div className='relative mt-8 lg:mt-0'>
              <Image
                src='/modulo3.webp'
                alt='SEO Performance Dashboard'
                className='rounded-xl w-full'
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Digital Marketing Benefits */}
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-16 items-center text-center lg:text-left'>
            <div className='relative order-2 lg:order-1 mt-8 lg:mt-0'>
              <Image
                src='/modulo1.webp'
                alt='Marketing Analytics Dashboard'
                className='rounded-xl w-full'
                width={400}
                height={400}
              />
            </div>

            <div className='order-1 lg:order-2 max-w-xl mx-auto lg:mx-0'>
              <h3 className='text-2xl sm:text-3xl font-bold mb-6'>
                <span className='gradient-green'>
                  Digital Marketing Excellence
                </span>
                <span className='block text-base font-medium text-foreground/70 mt-2'>
                  Performance Marketing & ROI Metrics
                </span>
              </h3>

              <div className='space-y-16'>
                {' '}
                {/* Espacio fijo entre bloques de estadísticas */}
                <div>
                  <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4'>
                    <span className='text-5xl sm:text-6xl font-bold gradient-text'>
                      2.8x
                    </span>
                    <span className='text-xl sm:text-2xl font-semibold text-foreground mt-2'>
                      Revenue Growth
                    </span>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 mb-2 text-center sm:text-left'>
                    <span className='font-semibold'>Industry Fact:</span>{' '}
                    Companies using digital marketing are 2.8x more likely to
                    increase revenue (Google).
                  </p>
                  <p className='text-gray-600 dark:text-gray-300 text-center sm:text-left'>
                    <span className='font-semibold'>Our Impact:</span> Average
                    client conversion rate increase of 14.6%.
                  </p>
                </div>
                <div>
                  <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4'>
                    <span className='text-5xl sm:text-6xl font-bold gradient-green'>
                      10%
                    </span>
                    <span className='text-xl sm:text-2xl font-semibold text-foreground mt-2'>
                      Data-Driven Efficiency
                    </span>
                  </div>
                  <p className='text-foreground/50 mb-2 text-center sm:text-left'>
                    <span className='font-semibold'>Industry Fact:</span>{' '}
                    Data-driven marketing reduces acquisition costs by 30%.
                  </p>
                  <p className='text-foreground/50 text-center sm:text-left'>
                    <span className='font-semibold'>Our Impact:</span> Average
                    50% reduction in cost per acquisition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
