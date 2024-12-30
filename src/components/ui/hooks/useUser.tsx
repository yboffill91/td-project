'use client';
import { useState } from 'react';
import { User } from 'firebase/auth';

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  return {
    user,
    setUser,
  };
};
