import { HeaderBadge, ShimmerButton } from '@/components/ui';
import { HeadeingsFonts } from '@/lib';
import { HeroTrusted, FloatingCards, Features } from '@/features/landing';
import {
  ArrowUp,
  ChartLine,
  Globe,
  Rocket,
  Search,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
export const HeroSection = () => {
  return (
    <div className='min-h-[calc(100dvh-2rem)] flex flex-col items-center justify-between container mx-auto px-4'>
      <div className='relative w-full grid lg:grid-cols-2 mx-auto '>
        <div className='z-10 text-center lg:text-left my-auto '>
          <HeaderBadge
            heading='Create Stunning Websites in Minutes'
            subheading='Builder Launching Soon!'
            icon={Sparkles}
          />

          <h1
            className={`text-3xl text-balance sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-4 sm:mb-6 mx-auto lg:mx-0 ${HeadeingsFonts.className}`}
          >
            <span className='block text-foreground'>
              Turn Your Business Into a
            </span>
            <span className='block gradient-text mt-1 pb-4'>
              Revenue Machine
            </span>
          </h1>
          <p className='text-base sm:text-lg text-foreground/70 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-pretty p-2 sm:p-0'>
            We combine{' '}
            <strong className='text-foreground'> advanced SEO </strong>{' '}
            strategies with{' '}
            <strong className='text-foreground'> AI-powered </strong> content
            optimization to boost your{' '}
            <strong className='text-foreground'>organic traffic</strong> and
            conversions. Get monthly{' '}
            <strong className='text-foreground'> personalized reports </strong>{' '}
            and direct access to our expert team.
          </p>
          <div className='flex flex-col 2xl:flex-row gap-2 2xl:gap-4 items-center justify-center lg:justify-start mb-10 p-4 2xl:p-0'>
            <ShimmerButton className='px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base inline-flex w-full 2xl:w-auto'>
              <span>
                <ChartLine className='mr-4' />
              </span>
              Get My Free SEO Audit
            </ShimmerButton>

            <ShimmerButton
              variant='secondary'
              className='px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base inline-flex w-full 2xl:w-auto '
              data-scroll-to='tools'
            >
              <span>
                <Rocket className='mr-4' />
              </span>
              Discover Our Free Tools Suite
            </ShimmerButton>
          </div>
          <HeroTrusted />
        </div>
        {/* Right Column */}
        <div className='lg:w-full relative mt-2 sm:mt-12 lg:mt-0 z-10 '>
          <div className='relative flex items-end justify-center'>
            {/* Top Left Card */}
            <div className='hidden sm:flex absolute top-1/4 lg:left-10 -left-10 z-20  animate-float '>
              <FloatingCards title='Top Rankings' content='89% Success Rate'>
                <Globe className='icons-hero ' />
              </FloatingCards>
            </div>
            {/* Organic Traffic Card */}
            <div className='absolute z-20 bottom-5 w-64 '>
              <FloatingCards title='Average ROI' content='+285% Annual'>
                <ArrowUp className='icons-hero ' />
              </FloatingCards>
            </div>
            {/* Top Right Card */}
            <div className='hidden md:flex absolute top-40 lg:right-10 -right-10  z-20  animate-float-slow transition-all duration-1000'>
              <FloatingCards title='Monthly Traffic' content='+20k Visitors'>
                <Search className='icons-hero ' />
              </FloatingCards>
            </div>

            {/* Main image */}

            <Image
              src={'/standupTobbi.webp'}
              width={10000}
              height={1000}
              alt='Stand Up Tobbi'
              className=' h-full w-auto object-fill relative z-10rounded-full'
              style={{
                maskImage: `linear-gradient(black 80%, transparent)`,
                filter: `drop-shadow(0 -10px 50px rgba(120,119,198,0.1))`,
              }}
            />

            {/* Decorative dots */}
            <div className='hidden sm:grid absolute bottom-0 right-0 grid-cols-6 gap-1 sm:gap-2'>
              {[...Array(24)].map((_, index) => (
                <div
                  key={index}
                  className='w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/40 sadow-lg shadow-secondary'
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <Features />
      </div>
    </div>
  );
};
