import { ShimmerButton } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className='mt-12 flex items-center justify-center gap-2'>
      <ShimmerButton
        variant='secondary'
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        className={`p-2 ${
          currentPage === 1 && 'opacity-50 pointer-events-none'
        }`}
      >
        <ChevronLeft className='w-5 h-5' />
      </ShimmerButton>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <ShimmerButton
          key={page}
          variant={currentPage === page ? 'primary' : 'secondary'}
          onClick={() => onPageChange(page)}
          className={cn(
            'w-10 h-10 flex items-center justify-center',
            currentPage === page && 'font-bold'
          )}
        >
          {page}
        </ShimmerButton>
      ))}

      <ShimmerButton
        variant='secondary'
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        className={`p-2 ${
          currentPage === totalPages && 'opacity-50 pointer-events-none'
        }`}
      >
        <ChevronRight className='w-5 h-5' />
      </ShimmerButton>
    </div>
  );
};
