import { BarChart2, LucideIcon, User } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  {
    value: '94%',
    label: 'Client Satisfaction',
    icon: User,
  },
  {
    value: '180%',
    label: 'Average Growth',
    icon: BarChart2,
  },
];
