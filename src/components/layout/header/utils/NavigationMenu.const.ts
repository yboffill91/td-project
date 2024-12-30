import {
  BarChart2,
  Building2,
  Calculator,
  Database,
  GitBranch,
  Globe,
  Layout,
  LucideIcon,
  Mail,
  MapPin,
  MessageSquare,
  MessageSquareMore,
  Pencil,
  Search,
  Share2,
  Target,
  Users,
} from 'lucide-react';
import { Url } from 'next/dist/shared/lib/router/router';
import React from 'react';

interface NavigationMenu {
  name: string;
  icon: LucideIcon | React.ElementType;
  status?: 'live' | 'soon' | 'free' | 'premium';
}

export const tools: NavigationMenu[] = [
  {
    name: 'Web Cost Calculator',
    icon: Calculator,
    status: 'live',
  },
  {
    name: 'SEO On Page Scout',
    icon: Search,
    status: 'live',
  },
  {
    name: 'Website Builder',
    icon: Layout,
    status: 'soon',
  },
  {
    name: 'GMB Growth Manager',
    icon: MapPin,
    status: 'soon',
  },
  {
    name: 'AI Chat Connect',
    icon: MessageSquareMore,
    status: 'soon',
  },
  {
    name: 'Smart Sales Funnel',
    icon: GitBranch,
    status: 'soon',
  },
  {
    name: 'Small Business CRM',
    icon: Building2,
    status: 'soon',
  },
  {
    name: 'AI Content Writer',
    icon: Pencil,
    status: 'soon',
  },
];

interface services {
  category: 'SEO Services' | 'Marketing Services';
  items: {
    name: string;
    icon: LucideIcon | React.ElementType;
    href: Url;
  }[];
  
}

export const services: services[] = [
  {
    category: 'SEO Services',
    items: [
      {
        name: 'Technical SEO',
        icon: Database,
        href: '/services/seo-technical',
      },
      {
        name: 'On-Page SEO',
        icon: Layout,
        href: '/services/seo-on-page',
      },
      {
        name: 'Off-Page SEO',
        icon: Share2,
        href: '/services/seo-off-page',
      },
      {
        name: 'Local SEO',
        icon: Globe,
        href: '/services/seo-local',
      },
      {
        name: 'Content SEO',
        icon: MessageSquare,
        href: '/services/seo-content',
      },
      {
        name: 'Analytics SEO',
        icon: BarChart2,
        href: '/services/seo-analytics',
      },
    ],
  },
  {
    category: 'Marketing Services',
    items: [
      {
        name: 'Social Media Marketing',
        icon: Users,
        href: '/services/social-media-marketing',
      },
      {
        name: 'Email Marketing',
        icon: Mail,
        href: '/services/email-marketing',
      },
      {
        name: 'Influencer Marketing',
        icon: Users,
        href: '/services/influencer-marketing',
      },
      {
        name: 'Conversion Marketing',
        icon: Target,
        href: '/services/conversion-marketing',
      },
      {
        name: 'Google Ads',
        icon: Globe,
        href: '/services/google-ads',
      },
      {
        name: 'Facebook Ads',
        icon: Users,
        href: '/services/facebook-ads',
      },
      {
        name: 'Instagram Ads',
        icon: Users,
        href: '/services/instagram-ads',
      },
    ],
  },
];
