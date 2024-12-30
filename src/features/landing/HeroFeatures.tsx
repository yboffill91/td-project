import {
  Users,
  BarChart,
  Globe,
  Target,
  Briefcase,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: <Users className='icon-hero  ' />,
    title: 'Expert Guidance',
    description:
      'Our team of SEO and web development experts will guide you every step of the way, ensuring your online presence reaches its full potential.',
    color: {
      background: 'bg-secondary-orange/10',
      text: 'text-secondary-orange',
    },
  },
  {
    icon: <BarChart className='icon-hero ' />,
    title: 'Custom Strategy',
    description:
      'We develop personalized SEO and digital marketing strategies tailored to your specific goals and the unique needs of your business.',
    color: {
      background: 'bg-secondary-orange/10',
      text: 'text-secondary-orange',
    },
  },
  {
    icon: <Globe className='icon-hero ' />,
    title: 'Local Dominance',
    description:
      'We optimize your online presence to dominate local search results, increasing your visibility among customers in your area.',
    color: {
      background: 'bg-secondary-orange/10',
      text: 'text-secondary-orange',
    },
  },
  {
    icon: <Target className='icon-hero ' />,
    title: 'Conversion Focus',
    description:
      'We focus on converting traffic into real customers by optimizing your website and content to maximize conversion rates.',
    color: {
      background: 'bg-secondary-orange/10',
      text: 'text-secondary-orange',
    },
  },
  {
    icon: <Briefcase className='icon-hero ' />,
    title: 'Industry Expertise',
    description:
      'With extensive experience across various sectors, we provide SEO and web development solutions tailored to the specificities of your industry.',
    color: {
      background: 'bg-secondary-orange/10',
      text: 'text-secondary-orange',
    },
  },
  {
    icon: <TrendingUp className='icon-hero ' />,
    title: 'Competitive Edge',
    description:
      'We equip you with the tools and strategies needed to outperform your competition in search results and enhance user experience online.',
    color: {
      background: 'bg-secondary-orange/10',
      text: 'text-secondary-orange',
    },
  },
];

export function Features() {
  return (
    <section className=' w-screen bg-gradient-to-b bg-card/50 backdrop-blur-3xl backdrop-filter xl:py-10 py-2 '>
      <div className='m-auto max-w-[1400px] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-2'>
        {features.map(({ icon, title }) => (
          <div
            key={title}
            className={`inline-flex gap-2 items-center justify-center  `}
          >
            <span className={`icons-hero-holder text-card`}>{icon}</span>
            <h4 className={`text-sm font-semibold  mb-4 text-primary h-2 `}>
              {title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
