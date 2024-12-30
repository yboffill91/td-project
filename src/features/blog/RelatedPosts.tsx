import { cn } from '@/lib/utils';
import { BlogPost } from '@/features/blog/utils';
import { motion } from 'framer-motion';
import { BlogPostCard } from '@/features/blog';

interface Props {
  category: string;
  currentPostId: string;
  className?: string;
}

export function RelatedPosts({ category, currentPostId, className }: Props) {
  // This would typically come from your data source
  const relatedPosts: BlogPost[] = [];

  if (relatedPosts.length === 0) return null;

  return (
    <div className={cn('space-y-8', className)}>
      <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
        Related Articles
      </h3>

      <div className='grid md:grid-cols-2 gap-8'>
        {relatedPosts.map((post, index) => (
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
  );
}
