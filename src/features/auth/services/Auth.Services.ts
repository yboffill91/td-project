"use client";

import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import { toast } from '@/components/ui/hooks';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, facebookProvider } from '@/lib';
import { SignInInputs } from '@/features/auth/models';

export const useAuthService = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push('/');
    } catch (error) {
      toast({
        title: 'Sign in failed',
        description: 'Please check your credentials and try again',
        variant: 'destructive',
        duration: 5000,
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');
    } catch (error) {
      toast({
        title: 'Sign in failed',
        description: 'Error while signing in with Google',
        variant: 'destructive',
        duration: 5000,
      });
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      router.push('/');
    } catch (error) {
      toast({
        title: 'Sign in failed',
        description: 'Error while signing in with Facebook',
        variant: 'destructive',
        duration: 5000,
      });
    }
  };
  return {
    onSubmit,
    handleFacebookSignIn,
    handleGoogleSignIn,
  };
};
