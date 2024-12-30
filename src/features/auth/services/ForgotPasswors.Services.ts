"use client";
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { ForgotPasswordInputs } from '../models';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib';

export const useForgotPassworsServices = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);
      setSuccess('Password reset link sent to your email');
      setError('');
    } catch (error) {
      setError('Failed to send password reset email');
      setSuccess('');
    }
  };
  return {
    error,
    success,
    onSubmit,
  };
};
