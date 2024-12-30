import { Metadata } from 'next';
//TODO: Ver como incluir los metadatos dinamicos de post
export const metadata: Metadata = {
  title: 'Digital Marketing & SEO Blog | Expert Insights',
  description:
    'Stay ahead with expert insights on SEO, digital marketing strategies, and web development tips. Practical advice to grow your online presence.',
  keywords:
    'SEO expert, marketing expert, digital marketing, seo, marketing, services, tamerdigital, blog, digital marketing blog',
};

const PostIdLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PostIdLayout;
