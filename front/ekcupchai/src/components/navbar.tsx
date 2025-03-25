// // import React from "react";
// // interface NavProps {
// //     scrollToSection: (sectionId: string) => void;
// //   }
  

// // const Nav: React.FC = () => {
// //     return (
// //         <nav>
// //             <ul>
// //                 <li><a href="/home">Home</a></li>
// //                 <li><a href="/get-started">Get Started</a></li>
// //             </ul>
// //         </nav>
// //     );
// // };

// // export default Nav;



// import React from "react";

// interface NavProps {
//   scrollToSection: (sectionId: string) => void;
// }

// const Nav: React.FC<NavProps> = ({ scrollToSection }) => {
//   return (
//     <nav className="navbar">
//       <ul>
//         <li><button onClick={() => scrollToSection("home")}>Home</button></li>
//         <li><button onClick={() => scrollToSection("get-started")}>Get Started</button></li>
//         <li><button onClick={() => scrollToSection("explore")}>Explore</button></li>
//       </ul>
//     </nav>
//   );
// };

// export default Nav;





//===================================================second========================================



import React from "react";
import "./navbar.css";

type NavProps = {
  scrollToSection: (sectionId: string) => void;
};

const Nav: React.FC<NavProps> = ({ scrollToSection }) => {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollToSection("landing")}>Home</li>
        <li onClick={() => scrollToSection("home")}>About</li>
        <li onClick={() => scrollToSection("get-started")}>Get Started</li>
      </ul>
    </nav>
  );
};

export default Nav;
