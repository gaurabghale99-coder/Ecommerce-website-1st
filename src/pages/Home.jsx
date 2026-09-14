import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductGrid from "../assets/components/ProductGrid";
import Footer from "../assets/components/Footer";
import { products } from "../../productContent";
import { SearchContext } from "../context/SearchContext";

const categories = ["All", "Graphics Cards", "Laptops", "Monitors", "Keyboards", "Mouse"];

const Home = () => {
  const { searchTerm } = useContext(SearchContext);
  const { search } = useLocation();
  const navigate = useNavigate();
  const categoryFromUrl = new URLSearchParams(search).get("category");
  const selectedCategory = categories.includes(categoryFromUrl)
    ? categoryFromUrl
    : "All";

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
      <section id="products" className="container mx-auto my-8 px-4 scroll-mt-4 sm:my-10 sm:px-6 lg:px-4">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">Our Products</h1>
        <p className="text-gray-600 mb-6">Browse technology selected for work, play, and everything in between.</p>
        <div id="categories" className="flex flex-wrap gap-2 scroll-mt-4 sm:gap-4">
          {categories.map((category) => {
            return (
              <button
                onClick={() =>
                  navigate(
                    category === "All"
                      ? "/#categories"
                      : `/?category=${encodeURIComponent(category)}#categories`,
                  )
                }
                className="cursor-pointer rounded-lg bg-gray-300 px-3 py-2 text-sm font-bold transition-all ease-in hover:bg-zinc-500 active:scale-105 sm:px-4 sm:text-base"
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
