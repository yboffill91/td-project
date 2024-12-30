import BlogPostViewer from '@/features/blog/PostViewer';
import { BlogPost } from '@/features/blog/utils';

interface PostIDPageProps {
  post: BlogPost;
}

const PostIdPage = ({ post }: PostIDPageProps) => {
  return (
    <>
      <BlogPostViewer post={post} />
    </>
  );
};

export default PostIdPage;
