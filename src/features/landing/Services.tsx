import { HeaderBadge } from '@/components/ui';
import {
  Search,
  Globe,
  Smartphone,
  Mail,
  Users,
  TrendingUp,
  BarChart2,
  Share2,
  Layout,
  MessageSquare,
  Database,
  Target,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { JSX } from 'react';

interface Service {
  name: string;
  icon: JSX.Element;
  slug: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  textColor: string;
  icon: JSX.Element;
  services: Service[];
}

export function Services() {
  const serviceCategories: ServiceCategory[] = [
    {
      title: 'SEO Services',
      description:
        'Optimize your digital presence and dominate search rankings',
      gradientFrom: 'from-blue-300',
      gradientVia: 'via-blue-500',
      gradientTo: 'to-blue-700',
      textColor: 'text-blue-500',
      icon: <Search className='w-6 h-6 text-blue-500' />,
      services: [
        {
          name: 'SEO Técnico',
          icon: <Database className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'seo-tecnico',
        },
        {
          name: 'SEO On-Page',
          icon: <Layout className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'seo-on-page',
        },
        {
          name: 'SEO Off-Page',
          icon: <Share2 className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'seo-off-page',
        },
        {
          name: 'SEO Local',
          icon: <Globe className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'seo-local',
        },
        {
          name: 'SEO de Contenido',
          icon: (
            <MessageSquare className='w-4 h-4' style={{ color: '#030712' }} />
          ),
          slug: 'seo-contenido',
        },
        {
          name: 'SEO Analítico',
          icon: <BarChart2 className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'seo-analitico',
        },
      ],
    },
    {
      title: 'Marketing Services',
      description: 'Strategic marketing solutions for business growth',
      gradientFrom: 'from-orange-300',
      gradientVia: 'via-orange-500',
      gradientTo: 'to-orange-700',
      textColor: 'text-secondary-orange',
      icon: <TrendingUp className='w-6 h-6 text-secondary-orange' />,
      services: [
        {
          name: 'Marketing en Redes Sociales (SMM)',
          icon: <Users className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'social-media-marketing',
        },
        {
          name: 'Email Marketing',
          icon: <Mail className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'email-marketing',
        },
        {
          name: 'Marketing de Influencers',
          icon: <Users className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'influencer-marketing',
        },
        {
          name: 'Marketing de Conversión (CRO)',
          icon: <Target className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'conversion-marketing',
        },
        {
          name: 'Google Ads',
          icon: <Globe className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'google-ads',
        },
        {
          name: 'Facebook Ads',
          icon: <Users className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'facebook-ads',
        },
        {
          name: 'Instagram Ads',
          icon: <Smartphone className='w-4 h-4' style={{ color: '#030712' }} />,
          slug: 'instagram-ads',
        },
      ],
    },
  ];

  return (
    <section className='py-20 overflow-hidden'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Centrado */}
        <div className='max-w-4xl mx-auto text-center'>
          <HeaderBadge
            heading='AI-Powered Growth'
            variant='secondaryOrange'
            icon={Rocket}
          />
          <h2 className='text-3xl sm:text-4xl font-bold mb-12'>
            <span className='text-foreground'>All services you</span>{' '}
            <span className='gradient-text'>need to succeed.</span>
          </h2>

          <p className='text-xl text-foreground/70 mb-8 max-w-2xl mx-auto'>
            Transformamos tu presencia online con estrategias personalizadas de
            SEO y marketing digital, diseñadas para maximizar tu visibilidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid gap-8 lg:grid-cols-2 '>
          {serviceCategories.map((category) => (
            <div
              key={category.title}
              className='relative p-8 rounded-xl bg-gradient-to-br border-card border from-primary/5 from-10% via-card/10 via-30%  to-transparent'
            >
              {/* Category Header */}
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-white/10 rounded-xl'>
                  {category.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold ${category.textColor}`}>
                    {category.title}
                  </h3>
                  <p className='text-foreground/50 text-sm'>
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Services List */}
              <div className='space-y-2'>
                {category.services.map((service) => (
                  <a
                    key={service.name}
                    href={`/services/${service.slug}`}
                    className='group/tool relative flex items-center justify-between p-2 rounded-lg overflow-hidden'
                  >
                    <div className='flex items-center space-x-3'>
                      <div className='relative z-10'>
                        <div
                          className={`p-1.5 bg-gradient-to-br ${category.gradientFrom} ${category.gradientVia} ${category.gradientTo} rounded-md`}
                        >
                          {service.icon}
                        </div>
                      </div>
                      <span className='relative z-10 text-sm font-medium text-foreground'>
                        {service.name}
                      </span>
                    </div>
                    <ArrowRight className='relative z-10 w-4 h-4 text-foreground/50 opacity-0 group-hover/tool:opacity-100 transform translate-x-0 group-hover/tool:translate-x-1 transition-all' />
                    <div className='absolute inset-0 bg-card opacity-0 group-hover/tool:opacity-100 transition-opacity' />
                    <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/tool:duration-1000 group-hover/tool:[transform:skew(-12deg)_translateX(100%)]'>
                      <div className='relative h-full w-8 bg-accent' />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
