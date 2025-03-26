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
