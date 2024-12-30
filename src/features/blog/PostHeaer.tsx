import { Calendar, Clock, Eye } from 'lucide-react';
import type { BlogPost } from '@/features/blog/utils';
import Image from 'next/image';

interface PostHeaderProps {
  post: BlogPost;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className='text-center mb-16'>
      {/* Category & Subcategory */}
      <div className='flex flex-wrap items-center justify-center gap-2 mb-6'>
        <span className='px-3 py-1 text-sm font-medium text-foreground bg-gradient-to-br from-blue-300 via-primary to-secondary-blue rounded-full'>
          {post.category}
        </span>
        {post.subCategory && (
          <span className='px-3 py-1 text-sm font-medium text-foreground bg-gradient-to-br from-blue-200 via-primary/50 to-secondary-blue/50 rounded-full'>
            {post.subCategory}
          </span>
        )}
      </div>

      {/* Title */}
      <h1 className='text-4xl sm:text-5xl font-bold mb-6 text-foreground'>
        {post.title}
      </h1>

      <div className='flex items-center justify-center gap-6 text-foreground/70 mb-8'>
        <div className='flex items-center gap-2'>
          <Calendar className='w-5 h-5' />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
        </div>
        <span>•</span>
        <div className='flex items-center gap-2'>
          <Clock className='w-5 h-5' />
          <span>{post.readingTime}</span>
        </div>
        <span>•</span>
        <div className='flex items-center gap-2'>
          <Eye className='w-5 h-5' />
          <span>{post.views || 0} readers</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className='relative rounded-xl overflow-hidden mb-12'>
        <Image
          src={post.image}
          alt={post.title}
          className='w-full h-[800px] object-cover'
          width={40} // Adjust the width as needed
          height={40} // Adjust the height as needed
        />
      </div>
    </header>
  );
}
