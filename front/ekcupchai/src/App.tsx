
//================================================================first==============================================

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// import Nav from "./components/navbar";
// import Home from "./components/home";
// import GetStarted from "./components/get_started";
// import { motion } from "framer-motion";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Routes>
//           {/* Landing Page */}
//           <Route 
//             path="/" 
//             element={
//               <motion.div 
//                 className="landing-container"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//               >
//                 <header className="landing-header">
//                   <h1 className="brand-title">Ek cup chai</h1>
//                   <p className="brand-tagline">Experience the essence of wisdom and tranquility</p>
//                   <Nav />
//                   <motion.button 
//                     className="explore-button"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     onClick={() => window.location.href='/get-started'}
//                   >
//                     Get Started
//                   </motion.button>
//                 </header>
//               </motion.div>
//             } 
//           />

//           {/* Other Pages */}
//           <Route  path="/home" element={<Home />} />
//           <Route path="/get-started" element={<GetStarted />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

//========================================================second===============================================


// import React from "react";
// import "./App.css";
// import Nav from "./components/navbar";
// import Home from "./components/home";
// import GetStarted from "./components/get_started";
// import { motion } from "framer-motion";

// function App() {
//   const scrollToSection = (sectionId: string) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="app-container">
//       {/* Navbar */}
//       <Nav scrollToSection={scrollToSection} />

//       {/* Landing Section */}
//       <section id="home" className="section">
//         <motion.div 
//           className="landing-container"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <header className="landing-header">
//             <h1 className="brand-title">Ek Cup Chai</h1>
//             <p className="brand-tagline">Experience the essence of wisdom and tranquility</p>
//             <motion.button 
//               className="explore-button"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//               onClick={() => scrollToSection("get-started")}
//             >
//               Get Started
//             </motion.button>
//           </header>
//         </motion.div>
//       </section>

//       {/* Home Section */}
//       <section id="get-started" className="section">
//         <Home />
//       </section>

//       {/* Get Started Section */}
//       <section id="explore" className="section">
//         <GetStarted />
//       </section>
//     </div>
//   );
// }

// export default App;

//===============================================third=========================================================

import React from "react";
import "./App.css";
import Nav from "./components/navbar";
import Home from "./components/home";
import GetStarted from "./components/get_started";
import { motion } from "framer-motion";

function App() {
  // Function to scroll to a section based on ID
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-container">
      {/* Navbar with scrolling function */}
      <Nav scrollToSection={scrollToSection} />

      {/* Landing Section */}
      <section id="landing" className="section">
        <motion.div 
          className="landing-container"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <header className="landing-header">
            <h1 className="brand-title">Ek Cup Chai</h1>
            <p className="brand-tagline">
              Experience the essence of wisdom and tranquility
            </p>
            <motion.button 
              className="explore-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection("get-started")}
            >
              Get Started
            </motion.button>
          </header>
        </motion.div>
      </section>

      {/* Home Section */}
      <section id="home" className="section">
        <Home />
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="section">
        <GetStarted />
      </section>
    </div>
  );
}

export default App;
