// import { Inter } from 'next/font/google';
import { Outlet } from 'react-router';
import { twMerge } from "tailwind-merge";

// global components

//const inter = Inter({ subsets: ['latin'] });



export default function RootLayout() {
  return (
    <>
      <main className={twMerge(`w-full bg-accent-light`)}>
        <Outlet />
      </main>
    </>
  );
}
