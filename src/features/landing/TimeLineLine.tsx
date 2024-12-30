import React from 'react';
import { lineColors } from '@/features/landing/utils';

interface TimelineLineProps {
  index: number;
  isActive: boolean;
}

export const TimelineLine: React.FC<TimelineLineProps> = ({
  index,
  isActive,
}) => {
  return (
    <div className='flex-1 h-1 mx-2'>
      <div className='h-full w-full bg-background rounded'>
        <div
          className={`h-full rounded transition-all duration-500 ease-in-out bg-gradient-to-r ${lineColors[index]}`}
          style={{ width: isActive ? '100%' : '0%' }}
        />
      </div>
    </div>
  );
};
