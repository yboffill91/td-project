import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib';

interface HeaderBadgeProps {
  icon: LucideIcon | IconType;
  heading: string;
  subheading?: string;
  variant?:
    | 'default'
    | 'secondary'
    | 'secondaryGreen'
    | 'secondaryOrange'
    | 'secondaryPastel'
    | 'secondaryBlue'
    | 'secondaryPurple';
}

const badgeVariants = cva(
  'mb-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300  px-4 py-1 border backdrop-filter backdrop-blur-xl  relative group/badge overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-primary/20 text-primary border-primary/20  ',
        secondary: 'bg-secondary/20 text-secondary border-secondary/20 ',
        secondaryGreen:
          'bg-secondary-green/20 text-secondary-green border-secondary-green/20 ',
        secondaryOrange:
          'bg-secondary-orange/20 text-secondary-orange border-secondary-orange/20 ',
        secondaryPastel:
          ' bg-secondary-pastel/20 text-secondary-pastel border-secondary-pastel/20 ',
        secondaryBlue:
          'bg-secondary-blue/20 text-secondary-blue border-secondary-blue/20 ',
        secondaryPurple:
          ' bg-secondary-purple/20 text-secondary-purple border-secondary-purple/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export const HeaderBadge = ({
  icon: IconElement,
  heading,
  subheading,
  variant,
}: HeaderBadgeProps) => {
  return (
    <div className=' w-full flex items-center justify-center group/badge'>
      <div className={cn(badgeVariants({ variant }))}>
        <IconElement className='size-5' />
        <span className='text-[.7rem] md:text-sm font-medium flex gap-2 '>
          <h2 className='font-semibold'>{heading}</h2>{' '}
          {subheading && <p>| {subheading}</p>}
        </span>
        <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/badge:duration-1000 group-hover/badge:[transform:skew(-12deg)_translateX(100%)]'>
          <div className='relative h-full w-6 bg-gray-200'></div>
        </div>
      </div>
    </div>
  );
};
