import React from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/showcase/logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between  py-10">
          <h2 className="text-2xl text-white">Subsribe to our newsletter</h2>

          <form>
            <input
              type="text"
              placeholder="Enter your email...."
              className="bg-white border-gray-400 focus:outline-none px-2 "
            />
          </form>
        </div>

        <div className="bg-slate-800 text-white py-8 mt-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div>
                <img src={logo} className="my-4 w-70 h-25" />
                <div className="flex gap-6 items-center">
                  <FaFacebookF size={40} />
                  <FaTwitter size={40} />
                  <FaYoutube size={40} />
                  <FaInstagram size={40} />
                </div>
              </div>
              <div className="px-4">
                <h2 className="text-2xl font-semibold my-4">Pages</h2>
                <ul className="flex flex-col gap-2">
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
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold my-4">Category</h2>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link to="/">GPU</Link>
                  </li>
                  <li>
                    <Link to="/">Laptop</Link>
                  </li>
                  <li>
                    <Link to="/">Monitor</Link>
                  </li>
                  <li>
                    <Link to="/">Mouse</Link>
                  </li>
                  <li>
                    <Link to="/">Keyboard</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-2xl my-4">Contact us</h2>
                <p>Saheedchowk, Narayangarh, Bharatpur, Nepal</p>
                <p>+977 9840350822</p>
                <p>+977 9840350742</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-2 text-white text-sm text-center">
        <p>Copyright &copy; 2020-2025 DigitalOfficeSystem</p>
      </div>
    </footer>
  );
};

export default Footer;
