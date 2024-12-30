import React from 'react';
import { FaServicestack } from 'react-icons/fa';
import { services } from '@/components/layout/header/utils';
import Link from 'next/link';
import { ShimmerButton } from '@/components/ui';

export const ServicesDropDownContent = () => {
  return (
    <>
      <header className='lg:w-1/3 w-full lg:h-full h-auto p-4 flex flex-col items-center justify-center rounded-lg'>
        <span className='icons-hero-holder'>
          <FaServicestack className='text-foreground size-8' />
        </span>
        <h4 className='text-center text-xl mt-2 mb-4 text-foreground text-balance'>
          Unlock Your Business Potential with Our Comprehensive Digital
          Services!
        </h4>
        <p className='text-sm text-pretty'>
          In today’s competitive marketplace, having a robust online presence is
          essential for success. Our specialized SEO and Marketing Services are
          designed to help your business thrive by improving visibility, driving
          traffic, and increasing conversions.
        </p>
        <h5 className='text-lg xl:block hidden mt-3 mb-2'>
          <strong>SEO Services</strong>
        </h5>
        <p className='text-sm text-pretty xl:block hidden'>
          Ensure your website runs smoothly and efficiently with our Technical
          SEO services. We optimize your site’s architecture, making it easier
          for search engines to crawl and index your pages, which can lead to
          higher rankings.
        </p>
        <h5 className='text-lg xl:block hidden mt-3 mb-2'>
          <strong>Marketing Services</strong>
        </h5>
        <p className='text-sm text-pretty xl:block hidden'>
          Expand your reach and connect with your audience through our Social
          Media Marketing services. We create engaging campaigns that foster
          community interaction and brand loyalty across all platforms.
        </p>
      </header>
      <div className='lg:w-2/3 w-full bg-background p-4 rounded-lg flex lg:flex-row flex-col gap-2'>
        {services.map(({ category, items }) => (
          <div
            className='lg:w-1/2 w-full h-full flex flex-col items-center text-xl'
            key={category}
          >
            <h4>{category}</h4>
            <ul className='flex flex-col w-full justify-start items-start gap-2 space-y-2 p-2 '>
              {items.map(({ name, icon: IconElement, href }) => (
                <li key={name + href} className='w-full'>
                  <Link href={href}>
                    <ShimmerButton
                      variant={'secondary'}
                      className='w-full justify-start gap-4 hover:bg-card border-0 hover:border-0 hover:shadow-none bg-transparent text-foreground px-0'
                    >
                      <span className='icons-hero-holder'>
                        <IconElement className='icons-hero' />
                      </span>
                      <span className='text-sm font-swmibold'>{name}</span>
                    </ShimmerButton>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};
