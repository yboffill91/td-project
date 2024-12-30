'use client';

import { useEffect, useState } from 'react';
import { Star, TrendingUp, MessageCircle, Rocket } from 'lucide-react';
import { HeaderBadge } from '@/components/ui';
import Image from 'next/image';

const SLIDE_DURATION = 3000;

export function SocialProof() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      business: 'Local E-commerce Store',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      quote:
        'Their SEO strategy helped my small shop compete with bigger stores. My traffic doubled in just 3 months.',
      metric: '+112% Traffic',
    },
    {
      id: 2,
      name: 'Mike Reynolds',
      business: 'Tech Startup Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      quote:
        'As a startup, every dollar counts. Their data-driven approach helped us optimize our marketing spend effectively.',
      metric: '-30% Cost',
    },
    {
      id: 3,
      name: 'Ana García',
      business: 'Service Provider',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
      quote:
        'Finally found an agency that actually delivers results. My business now appears on the first page of Google.',
      metric: 'Top 10 Ranking',
    },
    {
      id: 4,
      name: 'John Smith',
      business: 'Local Restaurant',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      quote:
        'The local SEO strategy they implemented helped us increase our foot traffic significantly.',
      metric: '+45% Visitors',
    },
    {
      id: 5,
      name: 'Lisa Wong',
      business: 'Digital Artist',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      quote:
        'My online portfolio now ranks for key terms in my industry. Commission requests have increased dramatically.',
      metric: '2x Leads',
    },
    {
      id: 6,
      name: 'Sarah Chen',
      business: 'Local E-commerce Store',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      quote:
        'Their SEO strategy helped my small shop compete with bigger stores. My traffic doubled in just 3 months.',
      metric: '+112% Traffic',
    },
    {
      id: 7,
      name: 'Mike Reynolds',
      business: 'Tech Startup Founder',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      quote:
        'As a startup, every dollar counts. Their data-driven approach helped us optimize our marketing spend effectively.',
      metric: '-30% Cost',
    },
    {
      id: 8,
      name: 'Ana García',
      business: 'Service Provider',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
      quote:
        'Finally found an agency that actually delivers results. My business now appears on the first page of Google.',
      metric: 'Top 10 Ranking',
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    let animationFrameId: number;
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= SLIDE_DURATION) {
        setLeftIndex((prev) => (prev + 1) % (testimonials.length - 2));
        setRightIndex((prev) => (prev + 1) % (testimonials.length - 2));
        lastTime = currentTime;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, testimonials.length]);

  const getLeftCarouselItems = () => {
    return [
      testimonials[leftIndex % testimonials.length],
      testimonials[(leftIndex + 1) % testimonials.length],
      testimonials[(leftIndex + 2) % testimonials.length],
    ];
  };

  const getRightCarouselItems = () => {
    return [
      testimonials[
        (testimonials.length - 1 - rightIndex) % testimonials.length
      ],
      testimonials[
        (testimonials.length - 2 - rightIndex) % testimonials.length
      ],
      testimonials[
        (testimonials.length - 3 - rightIndex) % testimonials.length
      ],
    ];
  };

  return (
    <section className='py-20 sm:py-32 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl'>
        {/* Header section remains the same */}
        <div className='text-center mb-16'>
          <HeaderBadge
            icon={Rocket}
            heading='Growing Together'
            variant='secondaryOrange'
          />
          <h2 className='text-3xl sm:text-4xl font-bold mb-12'>
            <span className='text-foreground'>Real Results</span>{' '}
            <span className='gradient-text'>from Real Businesses.</span>
          </h2>

          {/* Metrics Grid */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto'>
            <div className='bg-card rounded-lg p-4 shadow-lg'>
              <div className='text-3xl font-bold gradient-text mb-1'>120+</div>
              <div className='text-sm text-foreground/70'>Happy Clients</div>
            </div>
            <div className='bg-card rounded-lg p-4 shadow-lg'>
              <div className='text-3xl font-bold gradient-orange mb-1'>5</div>
              <div className='text-sm text-foreground/70'>Average Rating</div>
            </div>
            <div className='bg-card rounded-lg p-4 shadow-lg'>
              <div className='text-3xl font-bold gradient-green mb-1'>94%</div>
              <div className='text-sm text-foreground/70'>Success Rate</div>
            </div>
            <div className='bg-card rounded-lg p-4 shadow-lg'>
              <div className='text-3xl font-bold gradient-text mb-1'>30+</div>
              <div className='text-sm text-foreground/70'>Reviews</div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className='relative'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className='space-y-8'>
            {/* Left-moving carousel */}
            <div className='grid md:grid-cols-3 gap-6 transition-all duration-300 ease-in-out'>
              {getLeftCarouselItems().map((item, index) => (
                <div
                  key={`left-${item.id}-${index}`}
                  className='relative bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'
                >
                  <div className='absolute -top-3 right-6 bg-gradient-to-r from-primary to-secondary-blue px-3 py-1 rounded-full'>
                    <span className='text-sm font-medium text-white'>
                      {item.metric}
                    </span>
                  </div>
                  <blockquote className='text-gray-600 dark:text-gray-300 mb-6'>
                    "{item.quote}"
                  </blockquote>
                  <div className='flex items-center'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      className='w-12 h-12 rounded-full'
                      width={100}
                      height={100}
                    />
                    <div className='ml-3'>
                      <div className='font-medium text-foreground'>
                        {item.name}
                      </div>
                      <div className='text-sm text-foreground/50'>
                        {item.business}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right-moving carousel */}
            <div className='grid md:grid-cols-3 gap-6 transition-all duration-300 ease-in-out'>
              {getRightCarouselItems().map((item, index) => (
                <div
                  key={`right-${item.id}-${index}`}
                  className='relative bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'
                >
                  <div className='absolute -top-3 right-6 bg-gradient-to-r from-primary to-secondary-blue px-3 py-1 rounded-full'>
                    <span className='text-sm font-medium text-card-foreground'>
                      {item.metric}
                    </span>
                  </div>
                  <blockquote className='text-foreground/50 mb-6'>
                    "{item.quote}"
                  </blockquote>
                  <div className='flex items-center'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      className='w-12 h-12 rounded-full'
                      width={100}
                      height={100}
                    />
                    <div className='ml-3'>
                      <div className='font-medium text-foreground'>
                        {item.name}
                      </div>
                      <div className='text-sm text-foreground/50'>
                        {item.business}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className='flex justify-center mt-8 space-x-2'>
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  leftIndex === index ? 'bg-primary w-6' : 'bg-accent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <div className='mt-16 flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg bg-card/50'>
          <div className='flex items-center mb-4 sm:mb-0'>
            <MessageCircle className='w-5 h-5 text-primary mr-2' />
            <span className='text-card-foreground'>
              Trusted by local businesses and startups
            </span>
          </div>

          <div className='flex items-center space-x-6'>
            <div className='flex items-center'>
              <Star className='w-5 h-5 text-secondary-orange' />
              <span className='text-foreground ml-2'>5/5 on Google</span>
            </div>
            <div className='flex items-center'>
              <TrendingUp className='w-5 h-5 text-secondary-green' />
              <span className='text-foreground ml-2'>Growing Fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
