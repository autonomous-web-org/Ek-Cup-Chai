// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDUpN9U7Jq-EFwrBxKthdvs8Po0gOK_FVc",
  authDomain: "ek-cup-chai.firebaseapp.com",
  projectId: "ek-cup-chai",
  storageBucket: "ek-cup-chai.firebasestorage.app",
  messagingSenderId: "590209365702",
  appId: "1:590209365702:web:5dbf31a286a1b9927449c7",
  measurementId: "G-9VC6X2Z36N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Auth setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user; // You can store user info in context/localStorage here
  } catch (error) {
    console.error("Google Sign-in Error:", error);
    return null;
  }
};
