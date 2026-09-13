import React, { useContext, useState } from "react";
import ProductGrid from "../assets/components/ProductGrid";
import Footer from "../assets/components/Footer";
import { products } from "../../productContent";
import { SearchContext } from "../context/SearchContext";

const Home = () => {
  const categories = ["All", "Graphics Cards", "Laptops", "Keyboards", "Mouse"];
  const { searchTerm } = useContext(SearchContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

    const matchesCategory = 
    selectedCategory === "All" ||
    product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  }
    
  );

  return (
    <div>
      <div className="bg"></div>
      <div className="px-4 container mx-auto my-10 ">
        <div className="flex gap-4">
          {categories.map((category) => {
            return (
              <button
                onClick={() => setSelectedCategory(category)}
                className="bg-gray-300 cursor-pointer active:scale-105 font-bold hover:bg-zinc-500 rounded-lg py-2 px-4 transition-all ease-in"
                key={category}
              >
                {category}
              </button>
            );
          })}
        </div>

        <ProductGrid  products={filteredProducts}/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
