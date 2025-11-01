import { Link, useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { signOut } from "firebase/auth";
import { Menu as MenuIcon, Globe, Gamepad, QrCode, LogOut } from "lucide-react"; //User
import { useState, useRef, useEffect } from "react";
import Profile from "../_components/Profile";

import { auth } from "../_libs/firebase";

import { useModalStore } from "../_stores/use_modal_store";
import { useAuthDataStore } from "../_stores/user_auth_data";

const Navbar = () => {
  const { signInData, clearSignInData } = useAuthDataStore();
  const modal = useModalStore();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close menu on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    clearSignInData();
    navigate("/goodbye");
  };

  // define your menu items
  const items = [
    // { id: "profile", icon: User, to: "/socialize/profile", color: 'text-primary' },
    { id: "explore", icon: Globe, to: "/socialize/explore", color: 'text-primary' },
    { id: "games", icon: Gamepad, to: "/socialize/games", color: 'text-primary' },
    {
      id: "qr",
      icon: QrCode,
      onClick: () => {
        modal.toggle();
        setMenuOpen(false);
      },
    },
    { id: "logout", icon: LogOut, onClick: handleLogout, color: "text-red-500" },
  ];

  return (
    <nav className="relative flex justify-between items-center w-full h-[10%] p-3 px-6 mx-auto text-primary shadow-md bg-white/80 z-50">
      <h1 className={twMerge("navs", "text-3xl")}>
        <Link to="/" className="flex items-center">
          {/* <img src={ChaiLogo} className="w-[3%]" /> */}
          Ek Cup Chai
        </Link>
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
            to={signInData ? "/socialize/explore" : "/get-started"}
            className={twMerge("navs", "text-2xl")}
          >
            Get Started
          </Link>
        </section>
      ) : (
        <div className="flex items-center gap-4" ref={menuRef}>
          {/* Profile */}
          {signInData && <Profile />}

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="navs"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>

          {/* Icon‐only menu */}
          <div className="absolute right-0 top-full m-3 p-2 flex flex-col items-end space-y-3 z-10">
            {items.map((item, idx) => {
              const Icon = item.icon;
              const delayMs = idx * 80;

              const baseClasses =
                `w-10 h-10 flex items-center justify-center border rounded-full transition-all
                duration-300 ease-[cubic-bezier(.68,-0.55,.265,1.55)] bg-secondary `;
              const stateClasses = menuOpen
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-75 pointer-events-none";
              const activeClasses = "bg-primary";

              const style = { transitionDelay: `${delayMs}ms` };

              if (item.to) {
                if (pathname == item.to) {
                  item.color = "text-accent-light";
                }

                return (
                  <Link
                    title={item.id}
                    to={item.to}
                    key={item.id}
                    className={twMerge(baseClasses, stateClasses, (pathname == item.to) && activeClasses)}
                    style={style}
                  >
                    <Icon className={item.color ?? "text-primary"} size={20} />
                  </Link>
                );
              } else {
                return (
                  <button
                    key={item.id}
                    title={item.id}
                    onClick={item.onClick}
                    className={twMerge(baseClasses, stateClasses)}
                    style={style}
                  >
                    <Icon className={item.color ?? "text-primary"} size={20} />
                  </button>
                );
              }
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
