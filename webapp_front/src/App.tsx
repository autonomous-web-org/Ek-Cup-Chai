import { Routes, Route } from "react-router";

import "./App.css"; // Ensure Tailwind is working

import RootLayout from "./_components/layouts";

import Home from "./_components/home";
// import Social from "./_components/socializing"
import Index from "./_components/socializing/index"
import Homesoc from "./_components/socializing/homesocial"



const App = () => {

    return (
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route path="/home" element={<Homesoc />} />
            

            {/* <Route path="/qr" element={<><QRCustomize /></>} /> */}
            <Route path="*" element={<div className="grid place-items-center h-full text-3xl">no chai here</div>} />
          </Route>
        </Routes>
    );
};

export default App;
