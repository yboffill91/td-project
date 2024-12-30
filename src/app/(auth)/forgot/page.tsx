'use client'

import { AuthLayout } from '@/features/auth';
import { ForgotPasswordForm } from '@/features/auth/forms';

type ForgotPasswordInputs = {
  email: string;
};

export default function ForgotPassword() {
  return (
    <AuthLayout title='Recover my Password'>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
