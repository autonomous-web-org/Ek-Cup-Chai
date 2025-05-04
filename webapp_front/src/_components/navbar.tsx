import { Link, useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { getAuth, signOut } from "firebase/auth";

import { useModalStore } from "../_stores/use_modal_store";
import { useAuthDataStore } from "../_stores/user_auth_data";

const Navbar = () => {
  const { signInData, clearSignInData } = useAuthDataStore();
  const modal = useModalStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);            // Firebase sign out
      clearSignInData();              // Clear Zustand auth state
      navigate("/goodbye");           // Redirect to goodbye page
    } catch (error) {
      console.error("Logout error:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  return (
    <nav className="flex justify-between items-center w-full backdrop-blur-md h-[10%] p-3 max-w-[1440px] mx-auto text-xl text-primary">
      <h1 className={twMerge("navs", "text-3xl")}>
        <Link to="/">☕ Ek Cup Chai</Link>
      </h1>

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
          <button
            onClick={handleLogout}
            className={twMerge("navs", "text-2xl text-red-500")}
          >
            Logout
          </button>
        </section>
      )}
    </nav>
  );
};

export default Navbar;
