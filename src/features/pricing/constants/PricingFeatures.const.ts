import {
  BarChart2,
  Clock,
  Globe,
  LucideIcon,
  MessageSquare,
  Rocket,
  Search,
  Target,
  Users,
} from 'lucide-react';
import { IconType } from 'react-icons/lib';

interface Feature {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
  details: string[];
}

export const features: Feature[] = [
  {
    icon: Search,
    title: 'Advanced SEO Tools',
    description:
      'Comprehensive SEO analysis and optimization tools to improve your search rankings.',
    details: [
      'Keyword research and tracking',
      'Technical SEO audits',
      'Competitor analysis',
      'Rank tracking',
    ],
  },
  {
    icon: BarChart2,
    title: 'Performance Analytics',
    description:
      'Detailed analytics and reporting to track your digital marketing success.',
    details: [
      'Real-time performance metrics',
      'Custom report builder',
      'Goal tracking',
      'ROI analysis',
    ],
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      'Expert support team available to help you achieve your digital marketing goals.',
    details: [
      '24/7 expert support',
      'Strategy consultations',
      'Training sessions',
      'Priority assistance',
    ],
  },
  {
    icon: Clock,
    title: 'Real-time Monitoring',
    description:
      '24/7 monitoring of your digital presence and campaign performance.',
    details: [
      'Uptime monitoring',
      'Performance alerts',
      'Security scanning',
      'Error detection',
    ],
  },
  {
    icon: Target,
    title: 'Custom Strategy',
    description:
      'Tailored digital marketing strategies based on your business needs.',
    details: [
      'Personalized action plans',
      'Industry-specific tactics',
      'Growth roadmaps',
      'KPI setting',
    ],
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'Expand your reach with international SEO and marketing capabilities.',
    details: [
      'Multi-language support',
      'Global SEO strategies',
      'International targeting',
      'Local market insights',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Content Optimization',
    description:
      'Expert content optimization to engage and convert your audience.',
    details: [
      'AI-powered suggestions',
      'SEO content analysis',
      'Readability scoring',
      'Topic clustering',
    ],
  },
  {
    icon: Rocket,
    title: 'Growth Focus',
    description:
      'Proven strategies to accelerate your business growth and success.',
    details: [
      'Growth tracking',
      'Market analysis',
      'Competitor insights',
      'Opportunity detection',
    ],
  },
];
