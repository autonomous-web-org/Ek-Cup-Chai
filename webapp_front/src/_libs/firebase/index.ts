

// firebaseConfig.ts
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
//importing database function like ref,databse,push for realtime database update
import { getDatabase, ref, push } from "firebase/database"; // 👈 for Realtime Database


// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDUpN9U7Jq-EFwrBxKthdvs8Po0gOK_FVc",
  authDomain: "ek-cup-chai.firebaseapp.com",
  projectId: "ek-cup-chai",
  storageBucket: "ek-cup-chai.firebasestorage.app",
  messagingSenderId: "590209365702",
  appId: "1:590209365702:web:5dbf31a286a1b9927449c7",
  measurementId: "G-9VC6X2Z36N",
  databaseURL: "https://ek-cup-chai-default-rtdb.asia-southeast1.firebasedatabase.app/"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initializing databse
const database = getDatabase(app);
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

/// Store Email-Only
export const storeEmailOnly = async (email: string) => {
  try {
    console.log("Trying to store email:", email); // 👈 Add this
    const emailRef = ref(database, "emails"); // 👈 "emails" is a collection
    await push(emailRef, { email ,createdAt: Date.now()}); // 👈 Push email object
    return true;
  } catch (error) {
    console.error("Error saving email:", error);
    return false;
  }
};

export { auth };