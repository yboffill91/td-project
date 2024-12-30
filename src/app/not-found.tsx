import { Button } from '@/components/ui';
import { HeadeingsFonts } from '@/lib';
import { ArrowLeft, ContactIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-col item-center justify-center min-h-screen bg-background gap-4'>
      <h1
        className={` text-6xl text-center font-bold ${HeadeingsFonts} gradient-orange`}
      >
        404
      </h1>
      <div className='h-1 w-sceen bg-gradient-to-r from-transparent from-30% via-primary to-transparent to-70%' />
      <p className='text-center text-xl text-foreground/70'>Page Not Found </p>
      <p className='text-center w-44 mx-auto text-foreground/50 text-pretty'>
        We can&apos;t seem to find the page you&apos;re looking for.
      </p>
      <div className='min-w-96 flex gap-2 items-center justify-center'>
        <Link href='/'>
          <Button
            variant={'default'}
            className='min-w-44 flex items-center justify-start'
          >
            <ArrowLeft className='w-4 h-4 text-primary-foreground animate-pulse' />
            <p className='text-sm font-medium'>Go Back Home</p>
          </Button>
        </Link>
        <Link href='/'>
          <Button
            variant={'outline'}
            className='min-w-44 flex items-center justify-start'
          >
            <ContactIcon className='w-4 h-4 text-primary-foreground' />
            <p className='text-sm font-medium'>Contact Support!</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
