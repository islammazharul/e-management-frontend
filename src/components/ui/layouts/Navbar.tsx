import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="lg:h-20 xl:h-24 w-full lg:fixed z-10">
      <nav className="w-full h-full max-w-[1250px] lg:flex justify-between items-center px-[8px] lg:px-[50px] xl:px-[20px] mx-auto z-10">
        <div>
          <div className="flex items-center justify-between lg:block">
            <h3 className="text-3xl font-bold">
              Event<span className="text-primary"> 360</span>
            </h3>

            <div className="lg:hidden">
              <button
                className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <RxCross2></RxCross2> : <FaBars></FaBars>}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`pb-3 mt-4 lg:block lg:pb-0 lg:mt-0 ${
            navbar ? "block" : "hidden"
          }`}
        >
          <ul className="items-center justify-center space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
            <li className="">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="">
              <NavLink to="/">About</NavLink>
            </li>
            <li className="">
              <NavLink to="/">Contact</NavLink>
            </li>
            <li className="">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
