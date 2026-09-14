import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 10 : 0;

  const total = subtotal + shipping;

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    console.log("Order placed;",cart);

    navigate("/order-success");
    
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:p-6">
      <Link
        to="/"
        className="inline-block mb-8 bg-slate-100 rounded-xl px-4 py-2 text-gray-600 hover:bg-slate-200 hover:text-black transition"
      >
        ← Back to Products
      </Link>

      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Checkout</h1>

      {cart.length === 0 ? (
        <div className="bg-white shadow-md rounded-2xl p-8 text-center">
          <p className="text-2xl font-semibold">No products to checkout.</p>

          <Link
            to="/"
            className="inline-block mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          <div className="bg-slate-900 rounded-2xl  text-white px-6 py-5">
            <h2 className="text-2xl font-semibold">Order Summary</h2>
            <p className="text-sm text-gray-300 mt-1">
              Review your items before placing your order
            </p>
          </div>

          <div className="p-4 sm:p-6">
            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between gap-4 py-4 border-b border-gray-200"
                >
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-800">
                      {product.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      Quantity: {product.quantity}
                    </p>
                  </div>

                  <span className="shrink-0 font-semibold text-gray-800">
                    ${(product.price * product.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Price Details */}
            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              {/* Total */}
              <div className="flex justify-between border-t pt-4 mt-4">
                <span className="text-xl font-bold">Total</span>

                <span className="text-xl font-bold text-blue-600">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Place Order Button */}
            <form onSubmit={handlePlaceOrder}>
              <button
                type="submit"
                className="w-full mt-6 bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-600 rounded-xl py-4 transition duration-200 hover:scale-[1.01]"
              >
                Place Order
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-4">
              Your order will be processed securely.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
