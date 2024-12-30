'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { auth } from '@/lib';
import { Button } from '@/components/ui';
import { FaGoogle } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { NavItems } from '@/components/layout/header';
import { useEffect, useState } from 'react';
import { useSignUpServices } from '@/features/auth/services';
import { useUser } from '@/components/ui/hooks';

export const HamburguerMenuHolder = () => {
  const { user, setUser } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const { handleGoogleSignIn } = useSignUpServices();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='hidden lg:flex items-center space-x-4'>
        <NavItems />
      </div>
      <div className='lg:hidden flex relative'>
        <Button variant={'ghost'} onClick={handleToggleOpen}>
          {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='absolute top-16 left-0 w-full sm:h-full h-[90dvh] p-4  bg-card z-50 flex flex-col gap-2 sm:flex-row justify-center items-center  lg:hidden'
          >
            <NavItems />
            {!user && (
              <Button
                onClick={handleGoogleSignIn}
                size={'sm'}
                className='flex md:hidden gradient-primary w-full sm:w-auto mt-4 sm:mt-0'
              >
                <FaGoogle />
                Sign Up
              </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
