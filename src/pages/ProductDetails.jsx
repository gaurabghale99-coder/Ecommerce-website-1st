import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../productContent";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">
          <div className="flex flex-col">
            <p className="text-2xl font-semibold mt-4">Product Not found</p>
            <Link to="/">
              <p className="text-blue-400 hover:text-blue-600 text-xl">
                Return to home
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 lg:p-10 mt-12">
      <Link
        to="/"
        className="inline-block mb-8 bg-slate-200 rounded-xl p-2 text-gray-600 hover:text-black"
      >
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.image}
            className="h-72 w-full object-contain shadow-lg sm:h-96 md:h-[500px]"
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center md:ml-3">
          <p className="text-gray-500">{product.category}</p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">{product.title}</h1>
          <p className="text-2xl font-semibold mt-4">${product.price}</p>
          <p className="text-gray-600 mt-5">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white py-3 px-6 mt-6 rounded cursor-pointer hover:scale-102 transition-all"
          >
            Add to cart
          </button>
          <button onClick={handleBuyNow} className="border border-black py-3 px-6 mt-3 rounded cursor-pointer hover:scale-102 transition-all">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
