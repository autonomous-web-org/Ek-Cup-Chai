import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { useModalStore } from "../_stores/use_modal_store";
import { useAuthDataStore } from "../_stores/user_auth_data";

const Navbar = () => {
  const signInData = useAuthDataStore(state => state.signInData);
  
  const modal = useModalStore();
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-between items-center w-full backdrop-blur-md h-[10%] p-3 max-w-[1440px] mx-auto text-xl text-primary">
      {/* Logo */}
      <h1 className={twMerge("navs", "text-3xl")}>
        <Link to="/">☕ Ek Cup Chai</Link>
      </h1>

      {/* Conditionally render sections based on path */}
      {!pathname.startsWith("/socialize") || !signInData ? (
        <section className="flex items-center space-x-9 text-lg font-medium">
          <button
            onClick={() => modal.toggle()}
            className={twMerge("navs", "text-2xl")}
          >
            Customize QR
          </button>
          <Link
            to={signInData ? "/socialize/explore" : "/socialize"}
            className={twMerge("navs", "text-2xl")}
          >
            Socialize
          </Link>
        </section>
      ) : (
        <section className="flex items-center space-x-9 text-lg font-medium">
          <button className={twMerge("navs", "text-2xl")}>
            Logout
          </button>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
