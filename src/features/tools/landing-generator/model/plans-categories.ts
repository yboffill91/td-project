import { FaUserTie, FaBox, FaTools } from 'react-icons/fa';

export const PLANS = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0.0,
    discount: null,
    description: 'Perfect for getting started',
    features: [
      '5 Sections Total',
      'Basic Design Templates',
      'Call to Action (CTA) to WhatsApp',
      'Custom Header and Footer',
      'Standard Supportt',
    ],
    limitations: [
      'A/B Testing',
      'Analysis and Conversion Tracking',
      'Integration with Third Party Tools',
      'Lead Capture by Email',
      'Priority Technical Support',
      'SEO Optimization',
    ],
  },
  {
    id: 'intermediate',
    name: 'Intermediate',
    price: 19.99,
    discount: 0.1,
    description: 'Best for growing businesses',
    features: [
      '7 Sections Total',
      'Analysis and Conversion Tracking',
      'Call to Action (CTA) to WhatsApp',
      'Custom Header and Footer',
      'Improved Design',
      'Integration with Third Party Tools',
      'SEO Optimization',
    ],
    limitations: [
      'A/B Testing',
      'Integration with Email Marketing',
      'Lead Capture by Email',
      'Priority Technical Support',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced',
    price: 39.99,
    discount: 0.15,
    description: 'For professional marketers',
    features: [
      '9+ Premium Sections',
      'A/B Testing',
      'Analysis and Conversion Tracking',
      'Call to Action (CTA) to WhatsApp',
      'Custom Header and Footer',
      'Integration with Email Marketing',
      'Integration with Third Party Tools',
      'Lead Capture by Email',
      'Premium Design',
      'Priority Technical Support',
      'SEO Optimization',
    ],
    limitations: [],
  },
];

export const LANDING_CATEGORIES = [
  {
    id: 'portfolio',
    icon: FaUserTie,
    title: 'Portfolio',
    description:
      'Showcase your work and skills with a professional portfolio landing page.',
  },
  {
    id: 'product',
    icon: FaBox,
    title: 'Product',
    description:
      'Highlight your product features and benefits with a compelling product landing page.',
  },
  {
    id: 'service',
    icon: FaTools,
    title: 'Service',
    description:
      'Promote your services and expertise with an engaging service landing page.',
  },
];
