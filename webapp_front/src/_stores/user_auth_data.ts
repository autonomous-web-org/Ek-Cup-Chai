import { create } from 'zustand';
import type { User } from 'firebase/auth';


// Extend the response to include a timestamp for expiration.
export interface SignInData {
    user?: User;
    _timestamp?: number;
    email?:string;
    displayName?: string | null;
    photoURL?: string | null;
    uid?: string | null;
}

// Define the store interface.
interface StoreState {
    signInData: SignInData | null;
    setSignInData: (data: SignInData) => void;
    clearSignInData: () => void;
}

// const EXPIRATION_TIME = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds


export const useAuthDataStore = create<StoreState>((set) => ({
    signInData: null,
    setSignInData: (data: SignInData) => {
        // Save the response along with the current timestamp.
        set({ signInData: { ...data, _timestamp: Date.now() } });
    },
    clearSignInData: () => set({ signInData: null }),
}));
