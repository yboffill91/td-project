import {
  BookOpen,
  Code,
  Globe,
  LucideIcon,
  Rocket,
  Stars,
  Target,
} from 'lucide-react';

type JourneyStep = {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  accent: string;
};

export const journeySteps: JourneyStep[] = [
  {
    year: 'Early Days',
    title: 'From Havana to Digital Dreams',
    description:
      'Born in Havana, Cuba, where digital opportunities were scarce, my passion for technology emerged from countless hours spent gaming. This early fascination with digital experiences would later shape my entire career path.',
    icon: Code,
    color: 'from-blue-300 via-primary to-secondary-blue',
    accent: 'bg-primary/10',
  },
  {
    year: 'Education',
    title: 'Foundation in Technology',
    description:
      "Earned my degree from Cuba's premier computer science university. While my academic journey wasn't traditional, it provided the fundamental knowledge that would later prove invaluable in the digital marketing landscape.",
    icon: BookOpen,
    color: 'from-orange-300 via-secondary-orange to-secondary-pastel',
    accent: 'bg-secondary-orange/10',
  },
  {
    year: 'First Venture',
    title: 'Entrepreneurial Beginnings',
    description:
      'Started my first digital content distribution business in Cuba, learning crucial lessons about market needs and digital distribution. This experience sparked my entrepreneurial spirit and revealed the transformative power of digital solutions.',
    icon: Rocket,
    color: 'from-blue-300 via-primary to-secondary-blue',
    accent: 'bg-primary/10',
  },
  {
    year: 'Transformation',
    title: 'Period of Growth',
    description:
      'Faced significant challenges, including 11 months of profound reflection. This period became a catalyst for change, strengthening my resolve to create something meaningful in the digital world.',
    icon: Target,
    color: 'from-emerald-300 via-secondary-green to-emerald-700',
    accent: 'bg-secondary-green/10',
  },
  {
    year: 'Renaissance',
    title: 'Digital Marketing Evolution',
    description:
      'Immersed myself in programming and digital marketing, building expertise from the ground up. Each challenge became a stepping stone toward mastery, fueling my passion for helping others succeed in the digital space.',
    icon: Stars,
    color: 'from-orange-300 via-secondary-orange to-secondary-pastel',
    accent: 'bg-secondary-orange/10',
  },
  {
    year: 'Today',
    title: "TAMERDigital's Vision",
    description:
      'Now leading TAMERDigital, we transform businesses through innovative digital strategies. My journey from tech enthusiast to digital marketing expert has shaped our unique approach to helping businesses thrive in the digital age.',
    icon: Globe,
    color: 'from-blue-300 via-primary to-secondary-blue',
    accent: 'bg-primary/10',
  },
];
