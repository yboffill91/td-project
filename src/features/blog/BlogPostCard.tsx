import { motion } from 'framer-motion';
import { BlogPost, categoryGradients } from './utils';

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export const BlogPostCard = ({ post, featured }: BlogPostCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        'group relative bg-card rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg cursor-pointer',
        featured ? 'md:grid md:grid-cols-2 md:gap-8' : ''
      )}
    >
      <Link
        href={`/blog/${post.id}`}
        className='absolute inset-0 z-10 w-full h-full'
      >
        {/* Image Container */}
        <div
          className={cn(
            'relative overflow-hidden',
            featured ? 'h-full' : 'h-48 sm:h-56'
          )}
        >
          <Image
            src={post.image}
            alt={post.title}
            className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
            width={40}
            height={40}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-background/90 to-transparent' />
        </div>

        {/* Content */}
        <div className='p-6'>
          {/* Category Badge */}
          <div className='flex flex-wrap items-center gap-2 mb-4'>
            <span
              className={cn(
                'px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-br',
                categoryGradients[
                  post.category as keyof typeof categoryGradients
                ].main,
                categoryGradients[
                  post.category as keyof typeof categoryGradients
                ].text
              )}
            >
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            {post.subCategory && (
              <span
                className={cn(
                  'px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-br',
                  categoryGradients[
                    post.category as keyof typeof categoryGradients
                  ]?.sub,
                  categoryGradients[
                    post.category as keyof typeof categoryGradients
                  ]?.text
                )}
              >
                {post.subCategory
                  .split('-')
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(' ')}
              </span>
            )}
          </div>

          {/* Title and Excerpt */}
          <h2
            className={cn(
              'font-bold text-foreground mb-2 group-hover:text-primary transition-colors',
              featured ? 'text-2xl sm:text-3xl' : 'text-xl'
            )}
          >
            {post.title}
          </h2>
          <p className='text-card-foreground/70 mb-4 line-clamp-2'>
            {post.excerpt}
          </p>

          {/* Metadata */}
          <div className='flex items-center gap-4 text-sm text-card-foreground/70 mb-6'>
            <div className='flex items-center gap-1'>
              <Calendar className='w-4 h-4' />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <Clock className='w-4 h-4' />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Author */}
          <div className='flex items-center gap-3'>
            <Image
              src={post.author.image}
              alt={post.author.name}
              className='w-10 h-10 rounded-full'
              width={40}
              height={40}
            />
            <div>
              <p className='font-medium text-foreground'>{post.author.name}</p>
              <p className='text-sm text-card-foreground/70'>
                {post.author.role}
              </p>
            </div>
          </div>

          {/* Read More */}
          <div className='mt-6 flex items-center gap-2 text-primary group/link'>
            <span className='text-sm font-medium'>Read More</span>
            <ArrowRight className='w-4 h-4 transform transition-transform group-hover/link:translate-x-1' />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
