import { Routes, Route } from "react-router";

import Home from "./components/home";
import GetStarted from "./components/get_started";

import "./App.css"; // Ensure Tailwind is working
import RootLayout from "./components/layouts";


const App = () => {

    return (
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/get-started" element={<><GetStarted /></>} />
            <Route path="*" element={<>no chai here</>} />
          </Route>
        </Routes>
    );
};

export default App;
