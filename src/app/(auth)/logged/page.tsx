'use client';
import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <section className=' '>
        <div className='container-fluid relative bg-background/50 backdrop-filter backdrop-blur-2xl p-6 rounded-md border text-foreground'>
          <div className='grid grid-cols-1'>
            <div className='flex flex-col  justify-center md:px-10 py-10 px-4'>
              <h1 className=' mt-3 md:text-5xl text-3xl font-bold capitalize mb-4'>
                You are already with us!
              </h1>
              <p>You are already logged in</p>
              <p>Now you can get back</p>

              <div className='mt-4'>
                <Link
                  href='/'
                  className='py-2 px-5 mt-6 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-primary hover:bg-primary/90 border-primary hover:border-primary text-primary-foreground rounded-md'
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
