'use client';

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib';
import { useAuthStore } from '@/store';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { setUser, setLoading, setInitialized } = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUser(user);
        setLoading(false);
        setInitialized(true);
      },
      (error) => {
        console.error('Auth state change error:', error);
        setLoading(false);
        setInitialized(true);
      }
    );

    return () => unsubscribe();
  }, [setUser, setLoading, setInitialized]);

  return <>{children}</>;
};