import { Box, Building2, Database, GitBranch, Layout, LucideIcon, MessageSquare, Pencil, TrendingUp } from 'lucide-react';
import type { Category } from '.';
import { IconType } from 'react-icons/lib';

export const categories: Category[] = [
  {
    id: 'seo',
    label: 'SEO',
    gradient: 'from-blue-300 via-blue-500 to-blue-700',
    subCategories: [
      { id: 'niche-seo', label: 'Niche SEO' },
      { id: 'off-page-seo', label: 'Off Page SEO' },
      { id: 'on-page-seo', label: 'On Page SEO' },
      { id: 'seo-local', label: 'SEO Local' },
      { id: 'seo-strategy', label: 'SEO Strategy' },
      { id: 'seo-trends', label: 'SEO Trends' },
    ],
  },
  {
    id: 'marketing',
    label: 'Digital Marketing',
    gradient: 'from-green-300 via-green-500 to-green-700',
    subCategories: [
      {
        id: 'digital-marketing-consulting',
        label: 'Digital Marketing Consulting',
      },
      {
        id: 'digital-marketing-strategies',
        label: 'Digital Marketing Strategies',
      },
      { id: 'local-digital-marketing', label: 'Local Digital Marketing' },
      { id: 'niches-digital-marketing', label: 'Niches for Digital Marketing' },
    ],
  },
];


interface aditionalCategory {
    id: string;
    label: string;
    icon: LucideIcon | IconType;
    gradient: string;
}

export const additionalCategories: aditionalCategory[] = [
  {
    id: 'website',
    label: 'Website',
    icon: Layout,
    gradient: 'from-purple-300 via-purple-500 to-purple-700',
  },
  {
    id: 'ai-chat',
    label: 'AI Chat',
    icon: MessageSquare,
    gradient: 'from-pink-300 via-pink-500 to-pink-700',
  },
  {
    id: 'sales-funnel',
    label: 'Sales Funnel',
    icon: GitBranch,
    gradient: 'from-orange-300 via-orange-500 to-orange-700',
  },
  {
    id: 'small-business',
    label: 'Small Business',
    icon: Building2,
    gradient: 'from-emerald-300 via-emerald-500 to-emerald-700',
  },
  {
    id: 'content-writer',
    label: 'Content Writer',
    icon: Pencil,
    gradient: 'from-cyan-300 via-cyan-500 to-cyan-700',
  },
  {
    id: 'growth-manager',
    label: 'Growth Manager',
    icon: TrendingUp,
    gradient: 'from-indigo-300 via-indigo-500 to-indigo-700',
  },
  {
    id: 'business-crm',
    label: 'Business CRM',
    icon: Database,
    gradient: 'from-blue-300 via-blue-500 to-blue-700',
  },
  {
    id: 'business-saas',
    label: 'Business SAAS',
    icon: Box,
    gradient: 'from-violet-300 via-violet-500 to-violet-700',
  },
];

interface CategoryGradient{
    main: string;
    sub: string;
    text: string;
} 

export const categoryGradients: Record<string, CategoryGradient> = {
    seo: {
      main: 'from-blue-300 via-blue-500 to-blue-700',
      sub: 'from-blue-200 via-blue-400 to-blue-600',
      text: 'text-gray-900'
    },
    marketing: {
      main: 'from-green-300 via-green-500 to-green-700',
      sub: 'from-green-200 via-green-400 to-green-600',
      text: 'text-gray-900'
    },
    tools: {
      main: 'from-orange-300 via-orange-500 to-orange-700',
      sub: 'from-orange-200 via-orange-400 to-orange-600',
      text: 'text-gray-900'
    }
  };
