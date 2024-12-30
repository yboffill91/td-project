export interface Step {
  title: string;
  description: string;
  icon: string;
  details: {
    duration: string;
    keyPoints: string[];
    deliverables: string[];
  };
}

export const steps: Step[] = [
  {
    title: 'Initial Analysis',
    description:
      'Comprehensive evaluation of your current digital presence and market position',
    icon: 'Search',
    details: {
      duration: '1-2 weeks',
      keyPoints: [
        'Brand identity assessment',
        'Competitor analysis',
        'Market opportunity identification',
        'Technical SEO audit',
      ],
      deliverables: [
        'Detailed audit report',
        'Competitive analysis document',
        'Initial strategy recommendations',
      ],
    },
  },
  {
    title: 'Strategy Development',
    description:
      'Creating a tailored digital strategy aligned with your business goals',
    icon: 'Target',
    details: {
      duration: '2-3 weeks',
      keyPoints: [
        'Goal setting and KPI definition',
        'Channel strategy planning',
        'Content strategy development',
        'Budget allocation',
      ],
      deliverables: [
        'Comprehensive strategy document',
        'Implementation timeline',
        'ROI projections',
      ],
    },
  },
  {
    title: 'Implementation',
    description:
      'Executing the strategy with precision and attention to detail',
    icon: 'Settings',
    details: {
      duration: '4-8 weeks',
      keyPoints: [
        'Technical optimizations',
        'Content creation and optimization',
        'Channel setup and configuration',
        'Analytics implementation',
      ],
      deliverables: [
        'Optimized digital presence',
        'Content calendar',
        'Performance tracking setup',
      ],
    },
  },
  {
    title: 'Performance Tracking',
    description:
      'Monitoring and analyzing results to ensure strategy effectiveness',
    icon: 'BarChart2',
    details: {
      duration: 'Ongoing',
      keyPoints: [
        'Real-time performance monitoring',
        'KPI tracking',
        'User behavior analysis',
        'Conversion optimization',
      ],
      deliverables: [
        'Monthly performance reports',
        'Optimization recommendations',
        'ROI analysis',
      ],
    },
  },
  {
    title: 'Optimization',
    description: 'Continuous improvement based on data and market changes',
    icon: 'PenTool',
    details: {
      duration: 'Ongoing',
      keyPoints: [
        'Data-driven adjustments',
        'A/B testing',
        'Strategy refinement',
        'Performance optimization',
      ],
      deliverables: [
        'Optimization reports',
        'Updated strategy documents',
        'Performance improvement metrics',
      ],
    },
  },
  {
    title: 'Growth & Scaling',
    description: 'Expanding success and exploring new opportunities',
    icon: 'Rocket',
    details: {
      duration: 'Ongoing',
      keyPoints: [
        'Market expansion planning',
        'New channel exploration',
        'Advanced optimization',
        'Growth opportunity identification',
      ],
      deliverables: [
        'Growth strategy document',
        'Scaling recommendations',
        'Long-term roadmap',
      ],
    },
  },
];

export const stepColors = [
  'bg-primary',
  'bg-secondary-green',
  'bg-secondary-orange',
  'bg-secondary-purple',
  'bg-secondary-pastel',
  'bg-secondary-blue',
];

export const lineColors = [
  'from-[#4285f4] to-[#34A853]',
  'from-[#34A853] to-[#f36812]',
  'from-[#f36812] to-[#A259FF]',
  'from-[#A259FF] to-[#FF7262]',
  'from-[#FF7262] to-[#46B7E9]',
];
