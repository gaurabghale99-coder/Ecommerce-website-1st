import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const logo = "/imgs/showcase/logo.png";
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    console.log("Newsletter subscription:", email);

    setMessage("Successfully subscribed to our newsletter!");
    setEmail("");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <footer className="bg-slate-900 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        {/* Newsletter */}
        <div id="faqs" className="flex flex-col items-start justify-between gap-6 py-8 scroll-mt-4 md:flex-row md:items-center md:py-10">
          <h2 className="text-xl text-white sm:text-2xl">Subscribe to our newsletter</h2>

          <div className="w-full md:w-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 sm:flex-row sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email..."
                className="w-full rounded-md border border-gray-400 bg-white px-4 py-2 focus:outline-none sm:w-64 sm:rounded-r-none"
              />

              <button
                type="submit"
                className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 sm:rounded-l-none"
              >
                Subscribe
              </button>
            </form>

            {message && (
              <p className="text-green-400 mt-2 text-sm">{message}</p>
            )}
          </div>
        </div>

        {/* Footer Content */}
        <div className="bg-slate-800 text-white py-8 mt-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              <div>
                <img src={logo} alt="Digital Office System" className="my-4 h-auto w-48 sm:w-56" />

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
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold my-4">Category</h2>

                <ul className="flex flex-col gap-2">
                  <li>
                    <Link to="/?category=Graphics%20Cards#categories">GPU</Link>
                  </li>
                  <li>
                    <Link to="/?category=Laptops#categories">Laptop</Link>
                  </li>
                  <li>
                    <Link to="/?category=Monitors#categories">Monitor</Link>
                  </li>
                  <li>
                    <Link to="/?category=Mouse#categories">Mouse</Link>
                  </li>
                  <li>
                    <Link to="/?category=Keyboards#categories">Keyboard</Link>
                  </li>
                </ul>
              </div>

              <div id="contact" className="break-words scroll-mt-4">
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
