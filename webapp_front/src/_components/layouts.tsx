// import { Inter } from 'next/font/google';
import { Outlet } from 'react-router';
import { twMerge } from "tailwind-merge";

// global components
import Navbar from './navbar';
import QRCustomize from "./qr_customize";

//const inter = Inter({ subsets: ['latin'] });



export default function RootLayout() {
  return (
    <>
      <Navbar />
      <QRCustomize />
      <main className={twMerge(`w-full h-[90%] bg-secondary`)}>
        <Outlet />
      </main>
    </>
  );
}
