'use client';
import React, { useState } from 'react';
import { posts, categories } from '@/features/blog/utils';
import { GradientButton } from '@/components/ui';
import { motion } from 'framer-motion';
import {
  SearchBar,
  CategoryFilter,
  BlogPostCard,
  Pagination,
  EmptyState,
} from '@/features/blog';

export const BlogGrid = () => {
  const POSTS_PER_PAGE = 15;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on category, subcategory, and search
  const filteredPosts = posts.filter((post) => {
    // Search filter
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    // Subcategory filter (only if a subcategory is selected)
    const matchesSubCategory =
      selectedSubCategory === 'all' || post.subCategory === selectedSubCategory;

    return matchesSearch && matchesCategory && matchesSubCategory;
  });

  // Get featured post from filtered posts
  const featuredPost =
    currentPage === 1 ? filteredPosts.find((post) => post.featured) : null;

  const regularPosts = filteredPosts.filter((post) => !post.featured);
  const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);

  const currentPosts = regularPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <section className=' py-10'>
      {/* Newsletter CTA */}
      <div className='relative mb-16 bg-secondary-green/5 dark:bg-emerald-900/5 backdrop-blur-sm rounded-2xl p-8 border border-secondary-green/20'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h3 className='text-2xl font-bold mb-4 text-center md:text-left'>
              <span className='text-foreground'>Get Weekly</span>{' '}
              <span className='gradient-green'>Growth Tips</span>
            </h3>
            <p className='text-foreground/70 mb-6 text-center md:text-left'>
              Join 2,000+ marketers and entrepreneurs getting actionable
              strategies straight to their inbox.
            </p>
            <div className='flex items-center justify-center md:justify-start gap-4 text-sm text-foreground/50'>
              <div className='flex items-center gap-2'>
                <svg
                  className='w-5 h-5 text-secondary-green'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>Weekly Updates</span>
              </div>
              <div className='flex items-center gap-2'>
                <svg
                  className='w-5 h-5 text-secondary-green'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>Unsubscribe Anytime</span>
              </div>
            </div>
          </div>
          <div>
            <form className='flex flex-col sm:flex-row gap-3'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 py-3 rounded-lg input border border-emerald-200/20 dark:border-emerald-800/20 focus:ring-2 focus:ring-secondary-green focus:border-transparent'
              />
              <GradientButton
                gradient='green'
                className='px-6 py-3 text-sm font-medium whitespace-nowrap'
              >
                Subscribe
              </GradientButton>
            </form>
            <p className='mt-3 text-sm text-foreground/70 text-center md:text-left'>
              Join 2,000+ professionals growing their business
            </p>
          </div>
        </div>
        {/* Decorative gradient effects */}
        <div className='absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-emerald-300 via-secondary-green to-emerald-700 rounded-full blur-3xl opacity-20'></div>
        <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-emerald-300 via-secondary-green to-emerald-700 rounded-full blur-3xl opacity-20'></div>
      </div>
      {/* Search and Filter Bar */}
      <div className='space-y-4 mb-8'>
        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Category Filters */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          selectedSubCategory={selectedSubCategory}
          onSelectCategory={(category) => {
            setSelectedCategory(category);
            //TODO: REvisa arriba si algo no funciona
            setSelectedSubCategory('all');
            setCurrentPage(1);
          }}
          onSelectSubCategory={(subCategory) => {
            setSelectedSubCategory(subCategory);
            //TODO: REvisa arriba si algo no funciona

            setCurrentPage(1);
          }}
        />
      </div>

      {/* Featured Post */}
      {featuredPost && currentPage === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='mb-16'
        >
          <BlogPostCard post={featuredPost} featured />
        </motion.div>
      )}

      {/* Regular Posts Grid */}
      <div className='space-y-16'>
        {/* First Row */}
        <div className='grid md:grid-cols-3 gap-8'>
          {currentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      {/* Show total results */}
      <p className='text-center text-sm text-foreground/70 mt-4'>
        Showing {Math.min(POSTS_PER_PAGE, currentPosts.length)} of{' '}
        {regularPosts.length} posts
      </p>

      {/* Empty State */}
      {filteredPosts.length === 0 && <EmptyState />}
    </section>
  );
};
