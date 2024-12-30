import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Digital Marketing Experts | TAMERDigital',
  description:
    'Meet the innovative team behind TAMERDigital. From Cuba to digital excellence, discover our journey, values, and commitment to transforming businesses through data-driven strategies.',
};

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default AboutLayout;
