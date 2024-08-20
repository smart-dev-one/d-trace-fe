import { create } from 'zustand';

interface AuthState {
  token: string | null;
  userId: string | null;
  email: string | null;
  roles: string[];
  expiresAt: number | null;
  setAuth: (authData: {
    token: string;
    userId: string;
    email: string;
    roles: string[];
    expiresAt: number;
  }) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>(set => ({
  token: null,
  userId: null,
  email: null,
  roles: [],
  expiresAt: null,
  setAuth: authData =>
    set({
      token: authData.token,
      userId: authData.userId,
      email: authData.email,
      roles: authData.roles,
      expiresAt: authData.expiresAt,
    }),
  clearAuth: () =>
    set({
      token: null,
      userId: null,
      email: null,
      roles: [],
      expiresAt: null,
    }),
}));
