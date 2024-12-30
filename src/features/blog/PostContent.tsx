import {
  Comments,
  RichContent,
  NewsLetterCTA,
  RelatedPosts,
} from '@/features/blog';
import { BlogPost, BlogPostContent } from './utils';

interface PostContentProps {
  post: BlogPost;
}

export function PostContent({ post }: PostContentProps) {
  return (
    <main className='lg:col-span-9'>
      <div className='prose prose-lg dark:prose-invert max-w-none'>
        {post.content.map((block, index) => (
          <RichContent key={index} block={block} />
        ))}
      </div>

      {/* Comments Section */}
      <Comments postId={post.id} className='mt-16' />

      {/* Newsletter CTA */}
      <NewsLetterCTA />

      {/* Related Posts */}
      <RelatedPosts
        category={post.category}
        currentPostId={post.id}
        className='my-10'
      />
    </main>
  );
}

function calculateReadingTime(content: BlogPostContent[]): number {
  const wordsPerMinute = 200;
  let totalWords = 0;

  content.forEach((block) => {
    if (block.type === 'paragraph' || block.type === 'quote') {
      totalWords += block.content.split(/\s+/).length;
    } else if (block.type === 'list') {
      totalWords += block.content.split('\n').join(' ').split(/\s+/).length;
    }
  });

  return Math.ceil(totalWords / wordsPerMinute);
}
