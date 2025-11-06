import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { onAuthStateChanged, type User } from 'firebase/auth';

import "./App.css"; // Ensure Tailwind is working


import { auth } from './_libs/firebase';

import RootLayout from "./_components/layouts";

import Home from "./_components/home";
import Auth from "./_components/auth";
import { Explore } from "./_components/socializing";
import Goodbye from "./_components/goodbye";

import { useAuthDataStore } from "./_stores/user_auth_data";




const App = () => {
  const useAuthStore = useAuthDataStore();
  
  useEffect(() => {
    onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        useAuthStore.setSignInData({ user: user });
      } else {
        useAuthStore.clearSignInData();
        // console.log("User signed out");
      }
    });
  }, []);

    return (
        <Routes>
          {/* Auth route without layout */}
          <Route path="/get-started" element={<Auth />} />
          
          {/* All other routes with RootLayout */}
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            {useAuthStore.signInData && (
              <Route path="/socialize/explore" element={<Explore />} />
            )}
            <Route path="/goodbye" element={<Goodbye />} />
            <Route path="*" element={<div className="grid place-items-center h-full text-3xl">no chai here</div>} />
          </Route>
        </Routes>
    );
};

export default App;
