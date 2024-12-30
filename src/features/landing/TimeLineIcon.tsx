import React from 'react';
import * as LucideIcons from 'lucide-react';
import { stepColors } from '@/features/landing/utils';

interface TimelineIconProps {
  icon: string;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  title?: string;
}

export const TimelineIcon: React.FC<TimelineIconProps> = ({
  title,
  icon,
  index,
  isActive,
  isCompleted,
}) => {
  const Icon = LucideIcons[icon as keyof typeof LucideIcons];

  return (
    <div
      className={`
      relative flex items-center justify-center sm:size-12 size-8  rounded-full 
      transition-all duration-300 ease-in-out
      ${stepColors[index]}
      ${isActive ? 'scale-150' : 'scale-100'}
      ${isCompleted || isActive ? 'opacity-100' : 'opacity-40'}
    `}
    >
      <Icon className='w-6 h-6 text-foreground' />
      <div className='absolute -bottom-6 text-[.7rem] font-medium whitespace-nowrap hidden md:block'>
        {title}
      </div>
    </div>
  );
};
