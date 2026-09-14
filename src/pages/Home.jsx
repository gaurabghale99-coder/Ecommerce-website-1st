import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductGrid from "../assets/components/ProductGrid";
import Footer from "../assets/components/Footer";
import { products } from "../../productContent";
import { SearchContext } from "../context/SearchContext";

const categories = ["All", "Graphics Cards", "Laptops", "Monitors", "Keyboards", "Mouse"];

const Home = () => {
  const { searchTerm } = useContext(SearchContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { search } = useLocation();

  // Footer category links use the query string so they can both scroll here
  // and show the selected category's products.
  React.useEffect(() => {
    const category = new URLSearchParams(search).get("category");
    if (category && categories.includes(category)) {
      setSelectedCategory(category);
    }
  }, [search]);

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
      <div id="home" className="bg scroll-mt-4"></div>
      <section id="products" className="px-4 container mx-auto my-10 scroll-mt-4">
        <h1 className="text-3xl font-bold mb-2">Our Products</h1>
        <p className="text-gray-600 mb-6">Browse technology selected for work, play, and everything in between.</p>
        <div id="categories" className="flex flex-wrap gap-4 scroll-mt-4">
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

        <ProductGrid products={filteredProducts}/>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
