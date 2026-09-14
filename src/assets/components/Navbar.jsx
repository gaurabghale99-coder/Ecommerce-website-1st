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
    <header className="fixed top-0 left-0 right-0 z-10  bg-white shadow-lg">
      <div className="relative border-b border-gray-100 bg-white py-2">
        <ul className="container mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-2">
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs sm:gap-x-4 sm:text-sm">
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
            className={`${isOpen ? "absolute right-4 top-full z-20 flex min-w-36 flex-col gap-3 rounded-lg bg-zinc-100 p-3 shadow-lg sm:right-6 lg:right-2" : "hidden"}`}
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

      <nav className="container mx-auto grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-2 px-4 py-2 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:px-6 md:py-3 lg:px-2">
        <div className="flex items-center">
          <Link to="/#home" className="rounded-2xl">
            <img src={logo} alt="Logo" className="h-12 w-auto sm:h-16 md:h-20" />
          </Link>
        </div>

        <form className="relative col-span-2 row-start-2 w-full sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:max-w-xl">
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

        <Link to="/cart" className="relative col-start-2 row-start-1 sm:col-start-3">
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
