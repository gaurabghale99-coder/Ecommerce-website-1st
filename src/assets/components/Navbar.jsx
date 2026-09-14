import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import { SearchContext } from "../../context/SearchContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const logo = "/imgs/showcase/logo.png";
  const [isOpen, setIsOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { cart } = useContext(CartContext);

  const handleUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative bg-white shadow-lg">
      <div className="py-2 shadow">
        <ul className="container mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-2">
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm sm:gap-x-4 sm:text-base">
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

      <nav className="container mx-auto flex flex-col justify-between items-center gap-4 px-4 py-4 sm:flex-row sm:px-6 md:py-3 lg:px-2">
        <div className="flex items-center">
          <Link to="/#home" className="rounded-2xl">
            <img src={logo} alt="Logo" className="h-auto w-36 sm:w-40 md:w-48" />
          </Link>
        </div>

        <form className="relative w-full sm:w-auto sm:flex-1 sm:max-w-xl">
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

        <Link to="/cart" className="relative self-end sm:self-auto">
          <ShoppingCart size={44} className="bg-gray-200 rounded-full px-3 sm:h-12 sm:w-12" />

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
