import { Tag } from 'lucide-react';

export function EmptyState() {
  return (
    <div className='text-center py-12'>
      <Tag className='w-12 h-12 text-foreground/70 mx-auto mb-4' />
      <h3 className='text-xl font-semibold text-foreground mb-2'>
        No posts found
      </h3>
      <p className='text-foreground/70'>
        Try adjusting your search or filter to find what you&apos;re looking
        for.
      </p>
    </div>
  );
}
