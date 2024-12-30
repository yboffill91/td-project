'use client';
import { useEffect, useRef, useState } from 'react';
import { additionalCategories, Category } from './utils';
import { ShimmerButton } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ChevronDown, Filter } from 'lucide-react';

interface Props {
  categories: Category[];
  selectedCategory: string;
  selectedSubCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectSubCategory: (subCategory: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  selectedSubCategory,
  onSelectCategory,
  onSelectSubCategory,
}: Props) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpenCategory(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='w-full' ref={containerRef}>
      <div className='flex flex-wrap items-center gap-2 mb-4'>
        <div className='flex items-center gap-2 mr-2'>
          <Filter className='w-5 h-5 text-foreground/50' />
          <span className='text-sm text-foreground/70'>Filter by</span>
        </div>

        {/* All Posts Button */}
        <ShimmerButton
          variant={selectedCategory === 'all' ? 'primary' : 'secondary'}
          onClick={() => {
            onSelectCategory('all');
            onSelectSubCategory('all');
            setOpenCategory(null);
          }}
          className='whitespace-nowrap text-sm'
        >
          All Posts
        </ShimmerButton>

        {/* Main Categories with Dropdowns */}
        {categories?.map((category) => (
          <div
            key={category.id}
            className='relative inline-flex items-center gap-1'
          >
            <ShimmerButton
              variant='secondary'
              onClick={() => onSelectCategory(category.id)}
              className={cn(
                'whitespace-nowrap text-sm',
                selectedCategory === category.id
                  ? `text-foreground bg-gradient-to-br ${category.gradient}`
                  : 'text-foreground/70'
              )}
            >
              {category.label}
            </ShimmerButton>

            <ShimmerButton
              variant='secondary'
              onClick={() =>
                setOpenCategory(
                  openCategory === category.id ? null : category.id
                )
              }
              className='p-1.5 min-w-[32px] flex items-center justify-center ml-1'
            >
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform',
                  openCategory === category.id ? 'rotate-180' : ''
                )}
              />
            </ShimmerButton>

            {/* Subcategories Dropdown */}
            {openCategory === category.id && (
              <div className='absolute z-10 top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg border py-2'>
                {category.subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      onSelectSubCategory(sub.id);
                      setOpenCategory(null);
                    }}
                    className={cn(
                      'w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors',
                      selectedSubCategory === sub.id
                        ? 'text-card-foreground font-medium bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400'
                        : 'text-card-foreground/50'
                    )}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className='flex flex-wrap items-center gap-2 mt-4'>
        {/* Additional Category Buttons */}
        {additionalCategories.map((category) => (
          <ShimmerButton
            key={category.id}
            variant={selectedCategory === category.id ? 'primary' : 'secondary'}
            onClick={() => {
              onSelectCategory(category.id);
              onSelectSubCategory('all');
              setOpenCategory(null);
            }}
            className={cn(
              'whitespace-nowrap text-sm inline-flex items-center gap-2',
              selectedCategory === category.id
                ? `text-foreground bg-gradient-to-br ${category.gradient}`
                : 'text-foreground/70'
            )}
          >
            <category.icon className='w-4 h-4' />
            <span>{category.label}</span>
          </ShimmerButton>
        ))}
      </div>
    </div>
  );
}
