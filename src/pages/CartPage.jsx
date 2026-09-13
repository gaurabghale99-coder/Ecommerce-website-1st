import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const shipping = subtotal > 0 ? 100 : 0;

  const total = subtotal + shipping;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mt-4">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.length === 0 ? (
            <div className="text-center">
              <p>
                <span className="font-semibold">Your cart is empty</span>
                <br />
                <span>Add some products to your cart to see them here</span>
              </p>

              <button className="bg-zinc-300 rounded-lg px-4 py-2 hover:bg-zinc-500">
                <Link to="/">Continue shopping</Link>
              </button>
            </div>
          ) : (
            <div className="p-4 shadow-md rounded-md">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 py-4 border-b border-gray-400 last:border-b-0"
                >
                  <img
                    src={product.image}
                    className="w-44 h-44 object-contain"
                  />
                  <div className=" flex-1">
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                    <p className="text-gray-500">${product.price}</p>
                    <div className="flex justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="text-lg cursor-pointer"
                        >
                          -
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="text-lg cursor-pointer"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-red-400 cursor-pointer"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="font-semibold text-xl">
                        ${(product.price * product.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="lg:col-span-1">
          <div className="bg-gray-200 p-6 rounded-md shadow-md">
            <h3 className="text-xl font-bold">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <p>Sub Total</p>
                <p>${subtotal.toFixed(2)} </p>
              </div>
              <div className="flex justify-between">
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>
              <div className="border-t pt-2 font-semibold">
                <div className="flex justify-between mt-7">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
            <button className="bg-gray-500 text-white hover:bg-zinc-600 cursor-pointer rounded-lg w-full py-2 mt-3">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
