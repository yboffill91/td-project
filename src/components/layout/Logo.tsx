'use client';

import Image from 'next/image';
import { BodyFonts, HeadeingsFonts } from '@/lib';
import { useRouter } from 'next/navigation';

export function Logo() {
  const router = useRouter();

  return (
    <button onClick={() => router.push('/')} className='!hover:outline-none'>
      <div className='flex items-center'>
        <Image
          src={'/tamerLogo.webp'}
          width={52}
          height={52}
          alt='Tamer Digital'
        />
        <p className='-ml-2 text-2xl text-foreground flex items-baseline'>
          <span className={`${BodyFonts.className}`}>T</span>
          <span className={`hidden md:block ${BodyFonts.className} uppercase`}>
            amer
          </span>
          <span
            className={`hidden md:block ${HeadeingsFonts.className} capitalize text-primary `}
          >
            digital
          </span>
          <span
            className={`md:hidden block text-primary -ml-1 ${HeadeingsFonts.className} lowercase `}
          >
            d
          </span>
        </p>
      </div>
    </button>
  );
}
