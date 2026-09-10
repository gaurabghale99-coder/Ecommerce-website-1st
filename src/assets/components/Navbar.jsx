import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleUser = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="bg-white shadow-lg">
      <div className= "py-2 shadow">
        <ul className="bg-pink-400 container mx-auto flex flex-wrap justify-between  md:flex-row px-4 md:px-2 items-center">
          <div className="bg-yellow-200 flex gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </div>

          <div className={`bg-red-200 ${isOpen ? "flex flex-col absolute right-3 md:right-0 top-10 z-10 bg-zinc-300 gap-3 " : "hidden"}`}>
            <li>
              <Link to="/">Sign</Link>
            </li>
            <hr  className="broder-t border-1"/>
            <li>
              <Link to="/">My Account</Link>
            </li>
          </div>

          <User size={30} 
          className="cursor-pointer bg-gray-300 p-1  rounded"
          onClick={handleUser}/>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
