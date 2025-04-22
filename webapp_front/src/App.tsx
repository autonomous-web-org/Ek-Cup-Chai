import { Routes, Route } from "react-router";

import Home from "./components/home";

import "./App.css"; // Ensure Tailwind is working
import RootLayout from "./components/layouts";


const App = () => {

    return (
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/qr" element={<><QRCustomize /></>} /> */}
            <Route path="*" element={<div className="grid place-items-center h-full text-3xl">no chai here</div>} />
          </Route>
        </Routes>
    );
};

export default App;
