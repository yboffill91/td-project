'use client';
import { signOut } from 'firebase/auth';
import { toast } from '@/components/ui/hooks';
import { auth } from '@/lib';
import { useRouter } from 'next/navigation';

export const logout = async () => {
  const router = useRouter();
  try {
    await signOut(auth);
    toast({
      title: 'You have successfully logged out',
      description: 'You can now log in again',
      variant: 'default',
    });
    router.push('/');
  } catch (error) {
    toast({
      title: 'Error logging out',
      description: 'Please try again',
      variant: 'destructive',
    });
  }
};
