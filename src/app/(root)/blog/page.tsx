import { ShimmerButton } from '@/components/ui';
import { BlogGrid } from '@/features/blog';
import { BookOpen, Plus } from 'lucide-react';
import React from 'react';

const BlogPage = () => {
  return (
    <main className='py-10'>
      <div className='container mx-auto px-4 sm:px-66 lg:px-8'>
        {/* BlogHeader */}
        <div className='max-w-3xl mx-auto text-center mb-12 min-h-[50dvh] flex flex-col items-center justify-center'>
          <div className='inline-flex items-center gap-2 bg-primary/10 rounded-full px-3 py-1 mb-6'>
            <BookOpen className='w-4 h-4 text-primary' />
            <span className='text-sm font-medium text-primary'>
              Latest Insights
            </span>
          </div>
          <h1 className='text-4xl sm:text-5xl font-bold mb-6'>
            <span className='text-foreground'>Unlock Your</span>{' '}
            <span className='gradient-text'>Digital Potential</span>
          </h1>
          <p className='text-xl text-foreground/70 mb-8'>
            Discover battle-tested strategies that have helped 100+ businesses
            dominate their markets. Get exclusive insights, actionable tips, and
            proven frameworks to outperform your competition.
          </p>
          <ShimmerButton
            variant='primary'
            className='px-6 py-2.5 text-sm font-medium inline-flex items-center gap-2'
            href='/blog/editor'
          >
            Create Article
            <Plus className='w-4 h-4' />
          </ShimmerButton>
        </div>
        <BlogGrid />
      </div>
    </main>
  );
};

export default BlogPage;
