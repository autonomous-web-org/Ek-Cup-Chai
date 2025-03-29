// import React from "react";
// // import { Link } from "react-router-dom"; 
// // import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./home.css";

// const Home: React.FC = () => {
    
//     const scrollToSection = (sectionId: string) => {
//         const section = document.getElementById(sectionId);
//         if (section) {
//           section.scrollIntoView({ behavior: "smooth" });
//         }
//       };
    

//     return (
//         <motion.div 
//             className="home-container" 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             transition={{ duration: 1 }}
//         >
//             <header className="home-header">
//                 <motion.h1 
//                     className="home-title"
//                     initial={{ y: -50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.8 }}
//                 >
//                     Welcome to CHAI!!!
//                 </motion.h1>
//                 <motion.p 
//                     className="home-subtitle"
//                     initial={{ y: 50, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 1 }}
//                 >
//                     Have some chai and Embark on a journey of self-discovery and personal growth.
//                 </motion.p>
//             </header>
            
//             <section className="home-content">
//                 <motion.div 
//                     className="home-card"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <h2>Discover</h2>
//                     <p>Explore an array of resources designed to expand your knowledge.</p>
//                 </motion.div>
                
//                 <motion.div 
//                     className="home-card"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <h2>Connect</h2>
//                     <p>Engage with a supportive community that shares your interests.</p>
//                 </motion.div>
                
//                 <motion.div 
//                     className="home-card"
//                     whileHover={{ scale: 1.05 }}
//                 >
//                     <h2>Grow</h2>
//                     <p>Transform yourself with continuous learning and experiences.</p>
//                 </motion.div>
//             </section>
            
//             <motion.button 
//                 className="home-button"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection("get-started")}
//             >
//                 Get Started
//             </motion.button>

//             <motion.button 
//                 className="home-button"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => scrollToSection("landing")}
//             >
//                 Return Home
//             </motion.button>
//         </motion.div>
//     );
// };

// export default Home;




//=================================2nd===================================



import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="text-center text-white"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Welcome to the Chai Experience! ☕</h1>
      <p className="mt-4 text-lg">Let’s talk, sip, and grow together over a warm cup of tea.</p>
    </motion.div>
  );
};

export default Home;
