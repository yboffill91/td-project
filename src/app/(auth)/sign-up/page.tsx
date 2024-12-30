'use client';

import { AuthLayout } from '@/features/auth';
import { SignupForm } from '@/features/auth/forms';

export default function SignUp() {
  return (
    <AuthLayout title='Create your account'>
      <SignupForm />
    </AuthLayout>
  );
}
