import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import logo from "../imgs/showcase/logo.png";
import { SearchContext } from "../../context/SearchContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { cart } = useContext(CartContext);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-lg">
      <div className="py-2 shadow">
        <ul className=" container mx-auto flex flex-wrap justify-between  md:flex-row px-4 md:px-2 items-center">
          <div className="flex gap-4">
            <li>
              <Link to="/#home">Home</Link>
            </li>
            <li>
              <Link to="/#products">About</Link>
            </li>
            <li>
              <Link to="/#faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </div>

          <div
            className={`bg-red-200 ${isOpen ? "flex flex-col absolute right-3 md:right-2 rounded-lg p-2 top-10 z-10 bg-zinc-300 gap-3 " : "hidden"}`}
          >
            <li>
              <Link to="/signin" onClick={() => setIsOpen(false)}>
                Sign in
              </Link>
            </li>
            <hr className="border-t border-gray-400" />
            <li>
              <Link to="/myaccount" onClick={() => setIsOpen(false)}>
                My Account
              </Link>
            </li>
          </div>

          <User
            size={30}
            className="cursor-pointer bg-gray-300 p-1  rounded"
            onClick={handleUser}
          />
        </ul>
      </div>

      <nav className="flex justify-between items-center container mx-auto py-5 md:py-3 px-2">
        <div className="flex items-center">
          <Link to="/#home" className="rounded-2xl">
            <img src={logo} alt="Logo" className="w-50 h-22" />
          </Link>
        </div>

        <form className="relative w-1/2">
          <input
            type="text"
            placeholder="Search Product ....."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full outline-none border-2 border-gray-200 py-2 px-2"
          />

          <Search
            size={20}
            className="absolute right-3 top-1/2  -translate-y-1/2 text-gray-500"
          />
        </form>

        <Link to="/cart" className="relative">
          <ShoppingCart size={50} className="bg-gray-200 rounded-full px-3" />

          {cart.length > 0 && (
            <span className="bg-blue-400 absolute rounded-full w-6 h-6 -top-4 -right-1 text-center text-white text-md items-center">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
