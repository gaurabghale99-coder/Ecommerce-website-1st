import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="shadow-xl rounded-md h-full flex flex-col overflow-hidden hover:scale-102 transition-all">
      <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
        <img src={product.image} className="w-full h-64 object-contain" />

        <div className="bg-gray-100 p-4 flex flex-col flex-1">
          <h2 className="font-semibold text-lg my-4 h-14">{product.title}</h2>

          <p className="text-sm border-gray-400 border-b-2 pb-4">
            {product.description.substring(0, 100)}...
          </p>

          <div className="flex justify-between pt-4 items-center">
            <p className="text-xl font-semibold">${product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button className="bg-blue-300 hover:bg-blue-500 p-2 cursor-pointer rounded-lg">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </Link>

   <button
  onClick={() => addToCart(product)}
  className="cursor-pointer bg-green-400 hover:bg-green-600 px-6 py-3 rounded-md flex items-center justify-center gap-2"
>
  <ShoppingCart size={22} />
  <span>Add to Cart</span>
</button>
    </div>
  );
};

export default ProductCard;
