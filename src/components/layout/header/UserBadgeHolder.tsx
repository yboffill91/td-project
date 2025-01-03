'use client';
import { UserBadge } from './UserBadge';
import Link from 'next/link';
import { Button, ShimmerButton } from '@/components/ui';
import { FaGoogle } from 'react-icons/fa';
import { useAuthStore } from '@/store';
import { useSignUpServices } from '@/features/auth/services';

export const UserBaggeHolder = () => {
  const { handleGoogleSignIn } = useSignUpServices();
  const { user } = useAuthStore();
  return (
    <>
      {user ? (
        <>
          <UserBadge photoUrl={user.photoURL} />
        </>
      ) : (
        <>
          <div className='hidden md:flex  bg-card rounded-md'>
            <Link href='/sign-in'>
              <ShimmerButton
                variant='secondary'
                className='rounded-l-lg rounded-r-none px-2'
              >
                Sign In
              </ShimmerButton>
            </Link>
            <ShimmerButton
              variant='primary'
              onClick={handleGoogleSignIn}
              className='rounded-lg  px-2 flex gap-2 bg-primary text-primary-foreground hover:bg-secondary-orange hover:text-primary-foreground'
            >
              <FaGoogle />
              Sign Up
            </ShimmerButton>
          </div>
        </>
      )}
    </>
  );
};
