// import React from "react";

// type NavProps = {
//   scrollToSection: (sectionId: string) => void;
// };

// const Nav: React.FC<NavProps> = ({ scrollToSection }) => {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-lg py-4">
//       <ul className="flex justify-center space-x-8 text-lg font-semibold text-gray-800">
//         <li 
//           className="cursor-pointer px-4 py-2 hover:text-[#EB5B00] transition-all duration-300"
//           onClick={() => scrollToSection("landing")}
//         >
//           Home
//         </li>
//         <li 
//           className="cursor-pointer px-4 py-2 hover:text-[#EB5B00] transition-all duration-300"
//           onClick={() => scrollToSection("home")}
//         >
//           About
//         </li>
//         <li 
//           className="cursor-pointer px-4 py-2 hover:text-[#EB5B00] transition-all duration-300"
//           onClick={() => scrollToSection("get-started")}
//         >
//           Get Started
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;



//==================================================2nd==============================================


import React from "react";

type NavProps = {
  scrollToSection: (sectionId: string) => void;
};

const Navbar: React.FC<NavProps> = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/20 backdrop-blur-md shadow-lg py-4 z-50">
      <ul className="flex justify-center space-x-10 text-xl font-medium text-white tracking-wide">
        <li className="cursor-pointer hover:text-[#EB5B00] transition-all duration-300" onClick={() => scrollToSection("landing")}>
          Home
        </li>
        <li className="cursor-pointer hover:text-[#EB5B00] transition-all duration-300" onClick={() => scrollToSection("home")}>
          About
        </li>
        <li className="cursor-pointer hover:text-[#EB5B00] transition-all duration-300" onClick={() => scrollToSection("get-started")}>
          Get Started
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
