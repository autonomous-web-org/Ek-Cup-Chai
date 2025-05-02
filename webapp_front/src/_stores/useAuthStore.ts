import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
  logout: () => void; // ✅ Add this
};

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  setLoggedIn: (value) => set({ isLoggedIn: value }),
  logout: () => set({ isLoggedIn: false }), // ✅ Define logout
}));
