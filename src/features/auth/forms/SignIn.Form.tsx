import { Button, Input, Label } from '@/components/ui';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { SignInInputs } from '@/features/auth/models';
import { useAuthService } from '@/features/auth/services';
import { AuthButtons } from './AuthButtons';

export const SignInForm = () => {
  const { onSubmit } = useAuthService();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>(); //se queda

  return (
    <>
      <AuthButtons />
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <Label htmlFor='email'>Email address</Label>
          <Input
            id='email'
            type='email'
            {...register('email', { required: 'Email is required' })}
            placeholder='youremail@example.com'
          />
          {errors.email && (
            <p className='text-destructive text-sm mt-1'>
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            {...register('password', {
              required: 'Password is required',
            })}
            placeholder='Enter your password'
          />
          {errors.password && (
            <p className='text-destructive text-sm mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>

        <div className='text-right'>
          <Link href={'/forgot'} className='text-secondary font-semibold'>
            Forgot your password
          </Link>
        </div>
        <Button type='submit' className='w-full gradient-primary'>
          Sign in
        </Button>
      </form>
      <div className='mt-8 flex gap-2 items-center justify-center'>
        <p className='capitalize'>Don&apos;t have an account?</p>
        <Link
          href={'sign-up'}
          className='text-secondary font-semibold underline'
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};
