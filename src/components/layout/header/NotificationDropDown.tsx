'use client';

import { NavDropDown } from './NavDropDown';
import { useWizardStore } from '@/store/newWizardStore';
import { Notifications } from './Notifications';
import { useState } from 'react';
import { Button, Separator } from '@/components/ui';
import { Bell, CogIcon, ShoppingCart } from 'lucide-react';
import { useNotificationStore } from '@/store';
// import { PurchasedPlans } from '@/features/land-gen-wizard/components/PurchasedPlans';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { toast } from '@/components/ui/hooks';
import { auth } from '@/lib';
import { useRouter } from 'next/navigation';

type NotificationsDropdownProps = {
  ref?: React.RefObject<HTMLDivElement>;
};

export function NotificationsDropdown({ ref }: NotificationsDropdownProps) {
  const { unreadCount } = useNotificationStore();
  const [step, setStep] = useState(0);
  const { purchasedPlans } = useWizardStore();
  const router = useRouter();

  const logout = async () => {
    try {
      await signOut(auth);
      toast({
        title: 'You have successfully logged out',
        description: 'You can now log in again',
        variant: 'default',
      });
      router.push('/');
    } catch (e) {
      toast({
        title: 'Error logging out',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  const handleNotificationClick = () => {
    setStep(0);
  };
  const handlePlansClick = () => {
    setStep(1);
  };
  const handleSettingsClick = () => {
    setStep(2);
  };

  return (
    <NavDropDown
      className='bg-card overflow-y-auto !flex-col !justify-between'
      ref={ref}
    >
      <header className=' flex items-center justify-center px-1 py-4 gap-4  '>
        <Button
          variant='outline'
          className={`relative  border-primary ${
            step === 0 && 'gradient-primary'
          }`}
          onClick={handleNotificationClick}
        >
          <Bell />
          <p className='hidden md:block'>Notifications</p>

          {unreadCount > 0 && (
            <>
              <span className='absolute right-0 top-0 size-2 rounded bg-secondary-green/80 text-xs flex items-center justify-center text-primary-foreground'>
                <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-green -z-0 opacity-75" ' />
              </span>
            </>
          )}
        </Button>
        <Button
          variant='outline'
          className={`relative  border-primary ${
            step === 1 && 'gradient-primary'
          }`}
          onClick={handlePlansClick}
        >
          <ShoppingCart className='text-card-foreground' />
          <p className='hidden md:block'>Purchased Tools</p>
          {purchasedPlans.length > 0 && (
            <span className='absolute  right-0 top-0 size-3 rounded bg-secondary-green/80 text-xs flex items-center justify-center text-primary-foreground'>
              {' '}
              {purchasedPlans.length}
            </span>
          )}
        </Button>
        <Button
          variant='outline'
          className={`relative  border-primary ${
            step === 2 && 'gradient-primary'
          }`}
          onClick={handleSettingsClick}
        >
          <CogIcon className='text-card-foreground' />
          <p className='hidden md:block'>Settings</p>
        </Button>
      </header>
      <div className=' mx-auto'>
        {step === 0 && <Notifications />}
        {step === 1 && (
          <div>Purchased Plans and Tools go Here, Act like Choppin Cart</div>
        )}
        {step === 2 && <div>User Settings Here</div>}
      </div>
      <footer className='flex flex-col items-center justify-center gap-2 mt-4 p-4 '>
        <Separator />
        <Button variant='outline' onClick={logout} className=' border-primary '>
          <FaSignOutAlt />
          <p>Log Out</p>
        </Button>
      </footer>
    </NavDropDown>
  );
}
