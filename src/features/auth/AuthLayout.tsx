import { ReactNode } from 'react';
import Link from 'next/link';
import { Logo } from '@/features/landing';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

export function AuthLayout({ children, title }: AuthLayoutProps) {
  return (
    <div className='z-10 w-full  max-w-md md:p-4 p-1 py-2 text-card-foreground mt-4'>
      <div>
        <Link
          href={'/'}
          className='w-full inline-flex items-center justify-center md:mb-4 mb-0 gap-1'
        ></Link>
      </div>
      <h2 className='md:mb-6 mb-2 text-3xl font-bold text-center text-card-foreground'>
        {title}
      </h2>
      {children}
    </div>
  );
}
