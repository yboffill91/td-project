'use client';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import { SignUpInputs } from '@/features/auth/models';
import { toast } from '@/components/ui/hooks';
import { auth, facebookProvider, googleProvider } from '@/lib';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';

export const useSignUpServices = () => {
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: 'Please try again',
        variant: 'destructive',
      });
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      if (data.firstName || data.lastName) {
        await updateProfile(userCredential.user, {
          displayName: `${data.firstName} ${data.lastName}`.trim(),
        });
      }
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error creating account',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error signing in with Google',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      router.push('/');
    } catch (error) {
      toast({
        title: 'Error signing in with Facebook',
        description: 'Please try again',
        variant: 'destructive',
      });
    }
  };

  return {
    onSubmit,
    handleFacebookSignIn,
    handleGoogleSignIn,
  };
};
