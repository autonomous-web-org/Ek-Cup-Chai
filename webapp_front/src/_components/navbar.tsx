import { Link } from "react-router-dom"; // ✅ Make sure it's "react-router-dom"
import { twMerge } from "tailwind-merge";

import { useModalStore } from "../_stores/useModalStore";

const Navbar = () => {
  const modal = useModalStore();

  return (
    <nav className="flex justify-between items-center w-full backdrop-blur-md h-[10%] p-3 max-w-[1440px] mx-auto text-xl text-primary">

        {/* Logo */}
        <h1 className={twMerge("navs", "text-3xl")}>
          <Link to="/">
            ☕ Ek Cup Chai
          </Link>
        </h1>

        {/* Navigation Links */}
        <section className="flex items-center space-x-9 text-lg font-medium ">
          <button
            onClick={() => modal.toggle()}
            className={twMerge("navs", "text-2xl")}
          >
            Customize QR
          </button>

          <Link
            to="/social"
            className={twMerge("navs", "text-2xl")}
          >
            Socialize
          </Link>
        </section>
    </nav>
  );
};

export default Navbar;
