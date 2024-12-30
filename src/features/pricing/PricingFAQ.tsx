'use client';
import { HelpCircle, Minus, Plus, Search } from 'lucide-react';
import React, { useState } from 'react';

import { categories, faqs } from '@/features/pricing/constants';
import { HeaderBadge } from '@/components/ui';

export const PricingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className='py-10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <HeaderBadge
            heading='Help Center'
            icon={HelpCircle}
            variant='default'
          />

          <h2 className='text-4xl font-bold mb-6'>
            <span className='text-foreground'>Frequently Asked</span>{' '}
            <span className='bg-clip-text text-transparent bg-gradient-to-br from-blue-300 via-primary to-secondary-blue'>
              Questions
            </span>
          </h2>
          <p className='text-xl text-foreground/70 mb-8'>
            Find answers to common questions about our services and pricing
          </p>

          {/* Search bar */}
          <div className='relative max-w-xl mx-auto mb-8'>
            <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 w-5 h-5' />
            <input
              type='text'
              placeholder='Search your question...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full pl-10 pr-4 py-3 rounded-full  input'
            />
          </div>

          {/* Category filters */}
          <div className='flex flex-wrap justify-center gap-2 mb-8'>
            {categories.map(({ id, name }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    activeCategory === id
                      ? 'bg-gradient-to-br from-blue-300 via-primary to-secondary-blue text-primary-foreground'
                      : 'bg-card/50 hover:bg-card text-card-foreground'
                  }`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        <div className='max-w-3xl mx-auto'>
          <div className='space-y-4'>
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className='bg-card rounded-xl shadow-lg   transform transition-all duration-200 hover:shadow-xl'
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className='w-full text-left px-6 py-4 flex items-center justify-between group'
                >
                  <span className='text-lg font-medium text-foreground group-hover:text-primary dark:group-hover:text-blue-400 transition-colors'>
                    {faq.question}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-card/50 transition-transform duration-200 
                    ${openIndex === index ? 'rotate-180' : ''}`}
                  >
                    {openIndex === index ? (
                      <Minus className='w-4 h-4 text-primary' />
                    ) : (
                      <Plus className='w-4 h-4 text-foreground/50' />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className='px-6 pb-4 text-foreground/50'>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className='text-center py-8'>
              <p className='text-foreground/50'>
                No questions found. Try adjusting your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
