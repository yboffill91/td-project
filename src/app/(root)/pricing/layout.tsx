import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Plans - Digital Marketing & SEO Services | TAMERDigital',
  description:
    'Explore our transparent pricing plans for digital marketing and SEO services. Find the perfect package to grow your business online.',
  keywords:
    'digital marketing, seo, marketing, services, pricing plans, tamerdigital',
};

const PricingLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default PricingLayout;
