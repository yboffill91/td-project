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
  LucideIcon,
} from 'lucide-react';
import { IconType } from 'react-icons';

interface Service {
  name: string;
  icon: LucideIcon | IconType;
  slug: string;
}

interface ServiceCategory {
  title: string;
  description: string;
  gradientFrom: string;
  gradientVia: string;
  gradientTo: string;
  textColor: string;
  icon: LucideIcon | IconType;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'SEO Services',
    description: 'Optimize your digital presence and dominate search rankings',
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
