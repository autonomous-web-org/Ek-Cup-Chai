

// import React from "react";
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
//     <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#DDEB9D] to-[#A0C878]">
//       {/* Navbar */}
//       <Nav scrollToSection={scrollToSection} />

//       {/* Landing Section */}
//       <section id="landing" className="w-full flex flex-col items-center justify-center text-center py-20">
//         <motion.div 
//           className="max-w-3xl bg-white/20 backdrop-blur-md rounded-2xl shadow-lg p-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <header>
//             <h1 className="text-5xl font-bold text-[#EB5B00]">Ek Cup Chai</h1>
//             <p className="text-lg text-gray-800 mt-4">
//               Experience the essence of wisdom and tranquility. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Eos beatae soluta dicta excepturi, mollitia veniam labore similique doloribus neque iste ea.
//             </p>
//             <motion.button 
//               className="mt-6 px-6 py-3 bg-[#EB5B00] text-white text-lg font-semibold rounded-lg shadow-md hover:bg-[#c44700] transform hover:scale-105 transition-all duration-300"
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
//       <section id="home" className="w-full py-20">
//         <Home />
//       </section>

//       {/* Get Started Section */}
//       <section id="get-started" className="w-full py-20">
//         <GetStarted />
//       </section>
//     </div>
//   );
// }

// export default App;



//========================================2nd==================================

// import React, { useEffect, useState } from "react";
// import Nav from "./components/navbar";
// import Home from "./components/home";
// import GetStarted from "./components/get_started";
// import { motion } from "framer-motion";

// const App = () => {
//   const [bgClass, setBgClass] = useState("day");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setBgClass(scrollPosition > window.innerHeight / 2 ? "night" : "day");
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={`min-h-screen w-full ${bgClass} transition-all duration-500`}>
//       <nav />
      
//       {/* Landing Section */}
//       <section id="landing" className="h-screen flex items-center justify-center text-center p-10">
//         <motion.div 
//           className="max-w-3xl bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-6xl font-bold text-[#EB5B00]">Ek Cup Chai</h1>
//           <p className="text-lg text-gray-100 mt-4">
//             Sip wisdom, embrace tranquility. Chai and thoughts, brewing together.
//           </p>
//         </motion.div>
//       </section>

//       {/* Home Section */}
//       <section id="home" className="h-screen flex items-center justify-center">
//         <Home />
//       </section>

//       {/* Get Started Section */}
//       <section id="get-started" className="h-screen flex items-center justify-center">
//         <GetStarted />
//       </section>
//     </div>
//   );
// };

// export default App;


//=========================================third===========================================



import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import GetStarted from "./components/get_started";
import { motion } from "framer-motion";
import "./App.css"; // Ensure Tailwind is working

const App = () => {
  const [bgClass, setBgClass] = useState("bg-day");

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setBgClass(scrollPosition > window.innerHeight / 2 ? "bg-night" : "bg-day");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen w-full ${bgClass} transition-all duration-700`}>
      <Navbar scrollToSection={scrollToSection} />

      {/* 🔥 Elegant Welcome Section */}
      <section id="landing" className="h-screen flex items-center justify-center text-center p-10">
        <motion.div 
          className="max-w-3xl bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold text-[#EB5B00] drop-shadow-lg">Ek Cup Chai ☕</h1>
          <p className="text-xl text-gray-100 mt-4 font-heavy">
            Sip wisdom, embrace tranquility. Chai and thoughts, brewing together.
          </p>
        </motion.div>
      </section>

      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center">
        <Home />
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="h-screen flex items-center justify-center">
        <GetStarted />
      </section>
    </div>
  );
};

export default App;
