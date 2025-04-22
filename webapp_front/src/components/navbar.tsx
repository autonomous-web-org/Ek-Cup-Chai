import { Link } from "react-router";

import { useModalStore } from "../stores/useModalStore";


const Navbar = () => {
  const modal = useModalStore();

  return (
    <nav className="flex justify-between w-full backdrop-blur-md h-[10%] p-3 max-w-[1440px] mx-auto text-xl text-primary">
      <h1>
        <Link to={"/"}>Ek Cup Chai</Link>
      </h1>

      <section className="space-x-6">
        {/* <Link to={"/qr"}>Customize QR</Link> */}
        <button onClick={() => {modal.toggle()}}>Customize QR</button>
        <Link to={"/social"}>Socialize</Link>
      </section>
    </nav>
  );
};

export default Navbar;
