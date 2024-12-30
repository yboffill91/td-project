import { Eye, Globe, LucideIcon, Rocket, Target } from 'lucide-react';

interface VisionPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const visionPoints: VisionPoint[] = [
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To revolutionize digital marketing through innovation and data-driven strategies, making advanced digital solutions accessible to businesses of all sizes.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with cutting-edge digital solutions that drive measurable growth and sustainable success in the digital landscape.',
  },
  {
    icon: Rocket,
    title: 'Our Goals',
    description:
      'To continuously innovate and expand our digital solutions, helping more businesses achieve their full potential in the digital world.',
  },
  {
    icon: Globe,
    title: 'Our Impact',
    description:
      'To create lasting positive change in the digital marketing industry by setting new standards for excellence and client success.',
  },
];
