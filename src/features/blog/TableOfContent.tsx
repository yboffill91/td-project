'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { BlogPost } from './utils';

interface Props {
  post: BlogPost;
  className?: string;
}

export function TableOfContents({ post, className }: Props) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let observer: IntersectionObserver;

    // Wait for content to be rendered
    const timeout = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: '0% 0% -80% 0%' }
      );

      const headings = document.querySelectorAll('h2, h3, h4');
      headings.forEach((heading) => observer.observe(heading));
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <nav className={cn('space-y-2', className)}>
      <h4 className='font-semibold text-foreground mb-4'>Table of Contents</h4>
      <ul className='space-y-2 text-sm'>
        {post.tableOfContents.map((item) => {
          return (
            <li
              key={item.id}
              className={cn(
                'transition-colors',
                item.level === 2 ? 'ml-0' : item.level === 3 ? 'ml-4' : 'ml-8'
              )}
            >
              <a
                href={`#${item.id}`}
                className={cn(
                  'inline-block py-1',
                  activeId === item.id
                    ? 'text-primary font-medium'
                    : 'text-foreground/70 hover:text-foreground'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#${item.id}`)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
