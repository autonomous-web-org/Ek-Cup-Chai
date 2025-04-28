import { Routes, Route } from "react-router";

import "./App.css"; // Ensure Tailwind is working

import RootLayout from "./_components/layouts";

import Home from "./_components/home";
import Auth from "./_components/socializing";
import Explore from "./_components/socializing/explore";



const App = () => {

    return (
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/social" element={<Auth />} />
            <Route path="/social/explore" element={<Explore />} />

            {/* <Route path="/qr" element={<><QRCustomize /></>} /> */}
            <Route path="*" element={<div className="grid place-items-center h-full text-3xl">no chai here</div>} />
          </Route>
        </Routes>
    );
};

export default App;
