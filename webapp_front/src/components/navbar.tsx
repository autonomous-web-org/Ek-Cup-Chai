import { Link } from "react-router-dom"; // ✅ Make sure it's "react-router-dom"
import { useModalStore } from "../stores/useModalStore";

const Navbar = () => {
  const modal = useModalStore();

  return (
    <nav className="w-full backdrop-blur-lg bg-white/30 border-b border-amber-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center h-20 px-6">

        {/* Logo */}
        <h1>
          <Link
            to="/"
            className="text-3xl font-extrabold text-amber-700 bg-gradient-to-r from-yellow-100 via-amber-200 to-orange-100 px-5 py-2 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            ☕ Ek Cup Chai
          </Link>
        </h1>

        {/* Navigation Links */}
        <section className="flex items-center space-x-6 text-lg font-medium text-amber-800">


          <button
            onClick={() => modal.toggle()}
            className="bg-amber-100 px-4 py-2 rounded-xl hover:bg-amber-200 transition duration-200 shadow hover:shadow-md"
          >
            Customize QR
          </button>

          <Link
            to="/social"
            className="bg-amber-100 px-4 py-2 rounded-xl hover:bg-amber-200 transition duration-200 shadow hover:shadow-md"
          >
            Socialize
          </Link>

        </section>
      </div>
    </nav>
  );
};

export default Navbar;
