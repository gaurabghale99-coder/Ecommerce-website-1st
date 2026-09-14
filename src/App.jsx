import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Navbar from "./assets/components/Navbar";
import { CartProvider } from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import SignIn from "./pages/SignIn";
import MyAccount from "./pages/MyAccount";
import SignUp from "./pages/SignUp";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";

// Keeps links such as /#products working even when they are clicked from a
// product, cart, or account page.
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const sectionId = hash.replace("#", "");

    if (sectionId) {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
};

const App = () => {
  return (
    <SearchProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToHash />
          <Navbar />
          <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
          </Routes>
          </main>
        </BrowserRouter>
      </CartProvider>
    </SearchProvider>
  );
};

export default App;
