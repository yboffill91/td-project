import {
  BarChart,
  BarChart2,
  Bot,
  Building2,
  Calculator,
  ExternalLink,
  FileText,
  ImageIcon,
  Layout,
  LucideIcon,
  Mail,
  MapPin,
  Pen,
  Search,
  Settings,
  Star,
  Target,
  Users,
} from 'lucide-react';

import { FaFacebook } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

interface Tool {
  name: string;
  icon: LucideIcon | IconType;
  status: 'Live' | 'Soon';
  description: string;
  starterAccess: {
    included: boolean;
    limit: string;
  };
  growthAccess: {
    included: boolean;
    limit: string;
  };
  enterpriseAccess: {
    included: boolean;
    limit: string;
  };
}

export interface ServiceDetail {
  name: string;
  description: string;
  features: {
    name: string;
    starter: string | boolean;
    growth: string | boolean;
    enterprise: string | boolean;
    description?: string;
  }[];
}

export interface Service {
  name: string;
  icon: LucideIcon | IconType;
  details: ServiceDetail[];
}

export const tools: Tool[] = [
  {
    name: 'Web Cost Calculator',
    icon: Calculator,
    status: 'Live',
    description:
      'Professional website cost estimation tool with comprehensive pricing analysis',
    starterAccess: {
      included: true,
      limit: 'Unlimited Access',
    },
    growthAccess: {
      included: true,
      limit: 'Unlimited Access',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited Access',
    },
  },
  {
    name: 'SEO Scout',
    icon: Search,
    status: 'Live',
    description: 'Complete SEO analysis and optimization toolkit',
    starterAccess: {
      included: true,
      limit: '5 pages/month',
    },
    growthAccess: {
      included: true,
      limit: '50 pages/month',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited pages',
    },
  },
  {
    name: 'Website Builder',
    icon: Layout,
    status: 'Soon',
    description: 'Professional website builder with SEO-optimized templates',
    starterAccess: {
      included: true,
      limit: '1 website',
    },
    growthAccess: {
      included: true,
      limit: '5 websites',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited websites',
    },
  },
  {
    name: 'GMB Manager',
    icon: MapPin,
    status: 'Soon',
    description: 'Complete Google Business Profile management solution',
    starterAccess: {
      included: true,
      limit: '1 location',
    },
    growthAccess: {
      included: true,
      limit: '5 locations',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited locations',
    },
  },
  {
    name: 'AI Chat Connect',
    icon: Bot,
    status: 'Soon',
    description: 'Intelligent customer service automation platform',
    starterAccess: {
      included: true,
      limit: '500 chats/month',
    },
    growthAccess: {
      included: true,
      limit: '5,000 chats/month',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited chats',
    },
  },
  {
    name: 'Smart Sales Funnel',
    icon: BarChart,
    status: 'Soon',
    description: 'Advanced sales funnel creation and optimization platform',
    starterAccess: {
      included: true,
      limit: '1 funnel',
    },
    growthAccess: {
      included: true,
      limit: '10 funnels',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited funnels',
    },
  },
  {
    name: 'Small Business CRM',
    icon: Building2,
    status: 'Soon',
    description: 'Complete customer relationship management solution',
    starterAccess: {
      included: true,
      limit: '500 contacts',
    },
    growthAccess: {
      included: true,
      limit: '10,000 contacts',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited contacts',
    },
  },
  {
    name: 'AI Content Writer',
    icon: Pen,
    status: 'Soon',
    description: 'AI-powered content creation and optimization suite',
    starterAccess: {
      included: true,
      limit: '5,000 words/month',
    },
    growthAccess: {
      included: true,
      limit: '50,000 words/month',
    },
    enterpriseAccess: {
      included: true,
      limit: 'Unlimited words',
    },
  },
];
export const SEOServices: Service[] = [
  {
    name: 'Technical SEO',
    icon: Settings,
    details: [
      {
        name: 'Technical Foundation',
        description:
          'Core technical optimization for search engine performance',
        features: [
          {
            name: 'Site Speed Optimization (Core Web Vitals)',
            starter: 'Basic optimization',
            growth: 'Advanced optimization',
            enterprise: 'Full optimization',
            description: 'Performance optimization focusing on Core Web Vitals',
          },
          {
            name: 'Crawl and Indexation Management',
            starter: 'Basic audit & fixes',
            growth: 'Comprehensive audit & fixes',
            enterprise: 'Continuous monitoring & fixes',
            description: 'Error detection and correction for optimal crawling',
          },
          {
            name: 'HTTPS and SSL Implementation',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Secure connection setup and maintenance',
          },
          {
            name: 'Robots.txt Optimization',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Crawl control and directives',
          },
          {
            name: 'Sitemap.xml Management',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'XML sitemap creation and optimization',
          },
          {
            name: 'Site Structure Optimization',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'URL structure and navigation improvement',
          },
          {
            name: 'Canonical Implementation',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Duplicate content management',
          },
        ],
      },
    ],
  },
  {
    name: 'On-Page SEO',
    icon: Layout,
    details: [
      {
        name: 'On-Page Optimization',
        description: 'Comprehensive on-page elements optimization',
        features: [
          {
            name: 'Meta Tags Optimization',
            starter: 'Basic optimization',
            growth: 'Advanced optimization',
            enterprise: 'Full optimization',
            description: 'Titles and meta descriptions optimization',
          },
          {
            name: 'Header Tags Structure',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Proper implementation of H1-H6 tags',
          },
          {
            name: 'Image Optimization',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'ALT attributes and image compression',
          },
          {
            name: 'Internal Linking Strategy',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Strategic internal link building',
          },
          {
            name: 'Keyword Optimization',
            starter: 'Basic implementation',
            growth: 'Advanced strategy',
            enterprise: 'Full strategy',
            description: 'Strategic keyword placement and optimization',
          },
          {
            name: 'Content Creation & Optimization',
            starter: 'Basic content',
            growth: 'Advanced content',
            enterprise: 'Premium content',
            description: 'Creation of optimized content',
          },
          {
            name: 'UX Improvements',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'User experience optimization',
          },
        ],
      },
    ],
  },
  {
    name: 'Off-Page SEO',
    icon: ExternalLink,
    details: [
      {
        name: 'Off-Page Strategy',
        description: 'External optimization and authority building',
        features: [
          {
            name: 'Quality Backlink Building',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Strategic acquisition of quality backlinks',
          },
          {
            name: 'Directory Listings',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Profiles and mentions in relevant directories',
          },
          {
            name: 'Guest Posting',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Content placement on authority sites',
          },
          {
            name: 'PR Management',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Online public relations management',
          },
          {
            name: 'Social Signals',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Social media presence optimization',
          },
        ],
      },
    ],
  },
  {
    name: 'Local SEO',
    icon: MapPin,
    details: [
      {
        name: 'Local Presence',
        description: 'Local business visibility optimization',
        features: [
          {
            name: 'Google Business Profile',
            starter: 'Basic optimization',
            growth: 'Advanced optimization',
            enterprise: 'Full optimization',
            description: 'GMB setup and optimization',
          },
          {
            name: 'Local Citations',
            starter: 'Basic citations',
            growth: 'Advanced citations',
            enterprise: 'Full citation management',
            description: 'Directory listings and citations',
          },
          {
            name: 'Review Management',
            starter: 'Basic monitoring',
            growth: 'Active management',
            enterprise: 'Full management',
            description: 'Reviews and reputation management',
          },
          {
            name: 'Local Content Optimization',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Content optimization with local focus',
          },
          {
            name: 'Local Schema Implementation',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Local business schema markup',
          },
          {
            name: 'Geolocation Optimization',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Location-based website optimization',
          },
        ],
      },
    ],
  },
  {
    name: 'Content SEO',
    icon: FileText,
    details: [
      {
        name: 'Content Strategy',
        description: 'Content creation and optimization strategy',
        features: [
          {
            name: 'Blog Content Creation',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Optimized blog articles creation',
          },
          {
            name: 'Keyword Research',
            starter: 'Basic research',
            growth: 'Advanced research',
            enterprise: 'Comprehensive research',
            description: 'Keyword analysis and strategy',
          },
          {
            name: 'Evergreen Content',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Long-term value content creation',
          },
          {
            name: 'Content Updates',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Existing content optimization',
          },
          {
            name: 'Semantic Optimization',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'LSI keywords implementation',
          },
        ],
      },
    ],
  },
  {
    name: 'Analytics SEO',
    icon: BarChart2,
    details: [
      {
        name: 'Analytics & Reporting',
        description: 'Performance tracking and analysis',
        features: [
          {
            name: 'Google Analytics Setup',
            starter: 'Basic setup',
            growth: 'Advanced setup',
            enterprise: 'Custom setup',
            description: 'Analytics implementation and monitoring',
          },
          {
            name: 'Search Console Management',
            starter: 'Basic setup',
            growth: 'Advanced setup',
            enterprise: 'Full management',
            description: 'GSC implementation and monitoring',
          },
          {
            name: 'Traffic Analysis',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'User behavior and traffic analysis',
          },
          {
            name: 'Performance Reports',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Custom SEO reporting',
          },
          {
            name: 'Conversion Tracking',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'ROI and KPI measurement',
          },
          {
            name: 'SEO Auditing',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Regular metrics and trends analysis',
          },
        ],
      },
    ],
  },
];
export const MarketingServices: Service[] = [
  {
    name: 'Social Media Marketing',
    icon: Users,
    details: [
      {
        name: 'Social Media Management',
        description: 'Comprehensive social media presence management',
        features: [
          {
            name: 'Account Setup and Optimization',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Platform setup and profile optimization',
          },
          {
            name: 'Content Calendar Creation',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Strategic content planning',
          },
          {
            name: 'Post Scheduling and Management',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Content scheduling and posting',
          },
          {
            name: 'Social Media Analytics',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Performance tracking and reporting',
          },
          {
            name: 'Audience Growth Strategy',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Advanced engagement and growth tactics',
          },
        ],
      },
    ],
  },
  {
    name: 'Email Marketing',
    icon: Mail,
    details: [
      {
        name: 'Email Campaign Management',
        description: 'Strategic email marketing implementation',
        features: [
          {
            name: 'Campaign Setup',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Email campaign configuration',
          },
          {
            name: 'List Management',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'List building and segmentation',
          },
          {
            name: 'Template Design',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Custom email template creation',
          },
          {
            name: 'A/B Testing',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Content and subject line testing',
          },
          {
            name: 'Performance Analytics',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Campaign tracking and analysis',
          },
        ],
      },
    ],
  },
  {
    name: 'Influencer Marketing',
    icon: Star,
    details: [
      {
        name: 'Influencer Campaign Management',
        description: 'Strategic influencer collaboration and management',
        features: [
          {
            name: 'Influencer Research',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Influencer identification and outreach',
          },
          {
            name: 'Content Creation',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Collaborative content development',
          },
          {
            name: 'Campaign Tracking',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Performance monitoring and reporting',
          },
          {
            name: 'Relationship Management',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Ongoing influencer relationship handling',
          },
        ],
      },
    ],
  },
  {
    name: 'Conversion Marketing',
    icon: Target,
    details: [
      {
        name: 'Conversion Rate Optimization',
        description: 'Strategic conversion improvement tactics',
        features: [
          {
            name: 'Landing Page Optimization',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Page optimization for conversions',
          },
          {
            name: 'Funnel Analysis',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Conversion funnel optimization',
          },
          {
            name: 'CTA Testing',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Call-to-action optimization',
          },
          {
            name: 'Advanced CRO Strategy',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Comprehensive conversion strategy',
          },
        ],
      },
    ],
  },
  {
    name: 'Google Ads',
    icon: Search,
    details: [
      {
        name: 'Google Ads Management',
        description: 'Comprehensive Google Ads campaign management',
        features: [
          {
            name: 'Campaign Setup',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Account and campaign configuration',
          },
          {
            name: 'Keyword Strategy',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Keyword research and bidding',
          },
          {
            name: 'Retargeting',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Retargeting campaign setup',
          },
          {
            name: 'Performance Optimization',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Campaign analysis and optimization',
          },
        ],
      },
    ],
  },
  {
    name: 'Facebook Ads',
    icon: FaFacebook,
    details: [
      {
        name: 'Facebook Ads Management',
        description: 'Strategic Facebook advertising',
        features: [
          {
            name: 'Campaign Setup',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Ad account and campaign setup',
          },
          {
            name: 'Audience Targeting',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Custom audience creation',
          },
          {
            name: 'Pixel Implementation',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Tracking pixel setup',
          },
          {
            name: 'Advanced Optimization',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Advanced campaign optimization',
          },
        ],
      },
    ],
  },
  {
    name: 'Instagram Ads',
    icon: ImageIcon,
    details: [
      {
        name: 'Instagram Ads Management',
        description: 'Strategic Instagram advertising',
        features: [
          {
            name: 'Campaign Setup',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Ad campaign configuration',
          },
          {
            name: 'Visual Content Creation',
            starter: true,
            growth: true,
            enterprise: true,
            description: 'Ad creative development',
          },
          {
            name: 'Audience Analytics',
            starter: false,
            growth: true,
            enterprise: true,
            description: 'Audience research and analysis',
          },
          {
            name: 'Engagement Strategy',
            starter: false,
            growth: false,
            enterprise: true,
            description: 'Advanced engagement optimization',
          },
        ],
      },
    ],
  },
];

interface Plan {
  name: string;
  price?: {
    monthly: number;
    yearly: number;
  };
  description: string;
  features: FeatureCategory[];
  popular: boolean;
}

interface FeatureCategory {
  category: string;
  items: string[];
}
export const plans: Plan[] = [
  {
    name: 'Starter',
    price: {
      monthly: 11.99,
      yearly: 114.99,
    },
    description:
      'Essential digital growth package for businesses starting their online journey. Access to all tools with basic features.',
    features: [
      {
        category: 'Tools Access',
        items: [
          'Web Cost Calculator - Basic Access',
          'SEO Scout - 5 pages/month',
          'Website Builder - 1 website',
          'GMB Manager - 1 location',
          'AI Chat - 500 chats/month',
          'Sales Funnel - 1 funnel',
          'CRM - 500 contacts',
          'AI Writer - 5,000 words/month',
        ],
      },
      {
        category: 'SEO Services',
        items: ['See More Details On Bottom'],
      },
      {
        category: 'Marketing Services',
        items: ['See More Details On Bottom'],
      },
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: {
      monthly: 24.99,
      yearly: 239.99,
    },
    description:
      'Complete digital transformation package with advanced features and priority support for growing businesses.',
    features: [
      {
        category: 'Tools Access',
        items: [
          'Web Cost Calculator - Advanced Access',
          'SEO Scout - 50 pages/month',
          'Website Builder - 5 websites',
          'GMB Manager - 5 locations',
          'AI Chat - 5000 chats/month',
          'Sales Funnel - 10 funnels',
          'CRM - 10,000 contacts',
          'AI Writer - 50,000 words/month',
        ],
      },
      {
        category: 'SEO Services',
        items: ['See More Details On Bottom'],
      },
      {
        category: 'Marketing Services',
        items: ['See More Details On Bottom'],
      },
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    description:
      'Fully customized solution with unlimited access to all tools and services, plus dedicated support team.',
    features: [
      {
        category: 'Tools Access',
        items: [
          'Web Cost Calculator - Unlimited Access',
          'SEO Scout - Unlimited pages',
          'Website Builder - Unlimited sites',
          'GMB Manager - Unlimited locations',
          'AI Chat - Unlimited chats',
          'Sales Funnel - Unlimited funnels',
          'CRM - Unlimited contacts',
          'AI Writer - Unlimited words',
        ],
      },
      {
        category: 'SEO Services',
        items: ['See More Details On Bottom'],
      },
      {
        category: 'Marketing Services',
        items: ['See More Details On Bottom'],
      },
    ],
    popular: false,
  },
];
