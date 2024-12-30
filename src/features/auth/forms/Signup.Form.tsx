import { useForm } from 'react-hook-form';
import { SignUpInputs } from '@/features/auth/models';
import { useSignUpServices } from '@/features/auth/services';
import { Button, Input, Label, Separator } from '@/components/ui';
import Link from 'next/link';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { AuthButtons } from './AuthButtons';

export const SignupForm = () => {
  const { onSubmit } = useSignUpServices();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpInputs>();
  return (
    <>
      <AuthButtons />
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex space-x-4'>
          <div className='w-1/2'>
            <Label htmlFor='firstName'>First Name</Label>
            <Input
              placeholder='Jhon'
              id='firstName'
              {...register('firstName')}
            />
          </div>
          <div className='w-1/2'>
            <Label htmlFor='lastName'>Last Name</Label>
            <Input id='lastName' placeholder='Doe' {...register('lastName')} />
          </div>
        </div>
        <div>
          <Label htmlFor='email'>Email address</Label>
          <Input
            id='email'
            type='email'
            {...register('email', { required: 'Email is required' })}
            placeholder='jhondoe@mail.com'
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            placeholder='Type a new Password'
          />
          {errors.password && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor='confirmPassword'>Confirm Password</Label>
          <Input
            id='confirmPassword'
            type='password'
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Your passwords do not match';
                }
              },
            })}
            placeholder='Confirm your Password'
          />
          {errors.confirmPassword && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button type='submit' className='w-full gradient-primary'>
          Sign up
        </Button>
      </form>
      <div className='mt-8 flex gap-2 items-center justify-center'>
        <p className='capitalize'>already have an account?</p>
        <Link
          href={'/sign-in'}
          className='text-secondary font-semibold underline'
        >
          Sign In
        </Link>
      </div>
    </>
  );
};
