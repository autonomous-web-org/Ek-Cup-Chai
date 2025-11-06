import { create } from 'zustand';

interface UserAuthData {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  uid: string | null;
}

interface AuthStore {
  user: UserAuthData | null;
  setSignInData: (data: { email: string | null }) => void;
  signOut: () => void;
}

export const useAuthDataStore = create<AuthStore>((set) => ({
  user: null,
  setSignInData: (data) => set({
    user: {
      email: data.email,
      displayName: null,
      photoURL: null,
      uid: null
    }
  }),
  signOut: () => set({ user: null }),
}));
