import React from 'react';
import type { BlogPost } from '@/features/blog/utils';
import { PostHeader, PostSidebar, PostContent } from '@/features/blog';

interface BlogPostViewProps {
  post: BlogPost;
}

export default function BlogPostViewer({ post }: BlogPostViewProps) {
  return (
    <article className='py-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-5xl mx-auto'>
          <PostHeader post={post} />

          {/* Content Grid */}
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <PostSidebar post={post} />
            <PostContent post={post} />
          </div>
        </div>
      </div>
    </article>
  );
}
