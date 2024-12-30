import { Heart, Lightbulb, LucideIcon, Shield, Target } from 'lucide-react';

interface ValueType {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  align: 'left' | 'right';
  color: string;
  accent: string;
}

export const values: ValueType[] = [
  {
    Icon: Shield,
    title: 'Integrity & Trust',
    subtitle: 'Building Lasting Relationships',
    description:
      'We believe in transparency and honesty in every interaction. Our commitment to ethical practices forms the foundation of lasting partnerships.',
    align: 'right',
    color: 'from-blue-300 via-blue-500 to-blue-700',
    accent: 'bg-gradient-to-br from-blue-300/10 via-blue-500/10 to-blue-700/10',
  },
  {
    Icon: Heart,
    title: 'Passion for Excellence',
    subtitle: 'Driven by Quality',
    description:
      "Our dedication to excellence goes beyond meeting expectations. We're passionate about creating solutions that truly make a difference.",
    align: 'left',
    color: 'from-orange-300 via-orange-500 to-orange-700',
    accent:
      'bg-gradient-to-br from-orange-300/10 via-orange-500/10 to-orange-700/10',
  },
  {
    Icon: Target,
    title: 'Results-Focused',
    subtitle: 'Measurable Impact',
    description:
      'Every strategy and decision is guided by data and focused on delivering tangible results that drive your business forward.',
    align: 'right',
    color: 'from-blue-300 via-blue-500 to-blue-700',
    accent: 'bg-gradient-to-br from-blue-300/10 via-blue-500/10 to-blue-700/10',
  },
  {
    Icon: Lightbulb,
    title: 'Continuous Innovation',
    subtitle: 'Always Evolving',
    description:
      'We stay ahead of digital trends, constantly exploring new technologies and methodologies to provide cutting-edge solutions.',
    align: 'left',
    color: 'from-emerald-300 via-emerald-500 to-emerald-700',
    accent:
      'bg-gradient-to-br from-emerald-300/10 via-emerald-500/10 to-emerald-700/10',
  },
];
