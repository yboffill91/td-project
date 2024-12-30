'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store';
import { Loader } from '@/app/Loader';

const authRoutes = ['/sign-in', '/sign-up', '/forgot'];

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isInitialized, isLoading, isAuthenticated } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (
      isInitialized &&
      !isLoading &&
      isAuthenticated() &&
      authRoutes.includes(pathname)
    ) {
      router.push('/logged');
    }
  }, [isInitialized, isLoading, isAuthenticated, pathname, router]);

  if (!isInitialized || isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};
