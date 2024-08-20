import { create } from 'zustand';

interface GlobalState {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useGlobalStore = create<GlobalState>(set => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
}));
