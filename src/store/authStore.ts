import { create } from 'zustand';
import { User } from 'firebase/auth';

type AuthStore = {
  user: User | null;
  isLoading: boolean;
  isInitialized: boolean;
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  setInitialized: (isInitialized: boolean) => void;
  isAuthenticated: () => boolean;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isLoading: true,
  isInitialized: false,
  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setInitialized: (isInitialized) => set({ isInitialized }),
  isAuthenticated: () => !!get().user,
}));
