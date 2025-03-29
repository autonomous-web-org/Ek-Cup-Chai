// import { Inter } from 'next/font/google';
import { Outlet } from 'react-router';

// global components

//const inter = Inter({ subsets: ['latin'] });



export default function RootLayout() {
  return (
    <>
        <Outlet />
    </>
  );
}
