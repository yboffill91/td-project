'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const seoOpportunities = [
  {
    title: 'Verify Your Account',
    text: "Boost your website's presence in search results by verifying your account credentials.",
    image: '/assets/auth-slider/1.webp',
  },
  {
    title: 'Optimize Content',
    text: 'Create engaging content that resonates with your audience and search engines.',
    image: '/assets/auth-slider/2.webp',
  },
  {
    title: 'Track Performance',
    text: 'Monitor your SEO metrics and adjust strategies for better results.',
    image: '/assets/auth-slider/3.webp',
  },
  {
    title: 'Grow Online',
    text: 'Expand your digital presence and reach more potential customers.',
    image: '/assets/auth-slider/4.webp',
  },
];

export default function OportunitiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prevSlide) =>
        prevSlide === seoOpportunities.length - 1 ? 0 : prevSlide + 1
      );
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) =>
      prev === seoOpportunities.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) =>
      prev === 0 ? seoOpportunities.length - 1 : prev - 1
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      };
    },
  };

  return (
    <div className='w-2/3 h-3/4 mx-auto relative bg-card/50 backdrop-filter backdrop-blur-2xl p-6 rounded-lg overflow-hidden border '>
      <button
        onClick={prevSlide}
        className='absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1 hover:bg-gray-800 rounded-full transition-colors'
        aria-label='Previous slide'
      >
        <ChevronLeft className='size-5' />
      </button>
      <button
        onClick={nextSlide}
        className='absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1 hover:bg-gray-800 rounded-full transition-colors'
        aria-label='Next slide'
      >
        <ChevronRight className='size-5' />
      </button>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial='enter'
          animate='center'
          exit='exit'
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className='absolute top-0 left-0 right-0 text-center p-6 '
        >
          <div className='flex justify-center mb-4'>
            <Image
              src={seoOpportunities[currentSlide].image}
              alt={seoOpportunities[currentSlide].title}
              width={96}
              height={96}
              className='size-32 rounded-full mt-4 w-auto object-contain'
            />
          </div>
          <h3 className='text-xl font-semibold mb-1 mt-8 text-card-foreground'>
            {seoOpportunities[currentSlide].title}
          </h3>
          <p className='text-sm text-card-foreground/70'>
            {seoOpportunities[currentSlide].text}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className='flex justify-center mt-4 gap-1 absolute bottom-4 left-0 right-0'>
        {seoOpportunities.map((_, index) => (
          <button
            key={index}
            className={`size-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-primary' : 'bg-secondary'
            }`}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
