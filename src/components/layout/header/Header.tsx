import {
  HamburguerMenuHolder,
  ThemeToggle,
  UserBaggeHolder,
} from '@/components/layout/header';
import { Logo } from '@/components/layout/Logo';
export const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 z-50  py-2 sm:py-3'>
      <div className='absolute -inset-x-8 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent ' />
      <div className='mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='flex  h-16 items-center justify-between container max-w-[1355px] mx-auto  px-2 rounded-lg border-b-2 border-x-[1px] border-primary/30 bg-card/50 backdrop-blur-3xl backdrop-filter'>
          <Logo />
          <HamburguerMenuHolder />
          <div className='flex items-center justify-center space-x-4'>
            <ThemeToggle />
            <UserBaggeHolder />
          </div>
        </div>
      </div>
    </header>
  );
};
