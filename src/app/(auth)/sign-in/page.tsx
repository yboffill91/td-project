'use client';

import { ProtectedRoute } from '@/providers/ProtectRoute';
import { AuthLayout } from '@/features/auth';
import { SignInForm } from '@/features/auth/forms';

export default function SignIn() {
  return (
    <ProtectedRoute>
      <AuthLayout title='Sign in to your account'>
        <SignInForm />
      </AuthLayout>
    </ProtectedRoute>
  );
}
