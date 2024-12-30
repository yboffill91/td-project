import { useForm } from 'react-hook-form';
import { ForgotPasswordInputs } from '@/features/auth/models';
import { useForgotPassworsServices } from '@/features/auth/services';
import { Button, Input, Label } from '@/components/ui';
import Link from 'next/link';

export const ForgotPasswordForm = () => {
  const { error, success, onSubmit } = useForgotPassworsServices();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>();
  return (
    <>
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
            <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
          )}
        </div>

        {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
        {success && <p className='text-green-500 text-sm mt-2'>{success}</p>}

        <Button type='submit' className='w-full gradient-primary'>
          Send me a link
        </Button>
      </form>
      <div className='mt-8 flex gap-2 items-center justify-center'>
        <p className='capitalize'>Get me back to</p>
        <Link
          href={'/sign-in'}
          className='text-secondary font-semibold underline'
        >
          Sign In
        </Link>
      </div>
      <div className='flex gap-2 items-center justify-center '>
        <p className='capitalize'>Don't have an account?</p>
        <Link
          href={'/sign-up'}
          className='text-secondary font-semibold underline'
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};
