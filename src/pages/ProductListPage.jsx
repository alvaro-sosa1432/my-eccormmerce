import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader } from "../components/Loader";
import { GetProductsByCategory } from "../stack/GetProduct";
import { ProductsCard } from "../components/ProductsCard";

export const ProductListPage = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = GetProductsByCategory();
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (error) return navigate("*");

  const getUniqueCategories = () => {
    if (!data) return [];
    const categories = data.map((product) => product.category);
    return ["all", ...new Set(categories)];
  };

  const getFilteredProducts = () => {
    if (!data) return [];
    if (selectedCategory === "all") return data;
    return data.filter((product) => product.category === selectedCategory);
  };

  const categories = getUniqueCategories();
  const filteredProducts = getFilteredProducts();

  const formatCategoryName = (category) => {
    if (category === "all") return "Todos";
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="bg-orange-100/50 dark:bg-zinc-900 min-h-screen p-4 transition-all duration-300">
      <section className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium 
                transition-all duration-300 transform hover:scale-105
                cursor-pointer
                ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-white dark:bg-zinc-950 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-zinc-800 shadow-xl/20 dark:shadow-white/20  hover:shadow-orange-500/50"
                }
              `}
              aria-label={`Filtrar por ${formatCategoryName(category)}`}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Mostrando:{" "}
            <span className="text-orange-500 dark:text-orange-400">
              {formatCategoryName(selectedCategory)}
              {selectedCategory !== "all" &&
                ` (${filteredProducts.length} productos)`}
            </span>
          </p>
        </div>
      </section>
      {isPending && <Loader />}
      <section className="flex flex-col md:flex-row  mx-auto flex-wrap md:max-w-7xl mt-10">
        {filteredProducts.map((product) => (
          <ProductsCard
            id={product?.id}
            key={product?.id}
            title={product?.title}
            image={product?.image}
            price={product?.price}
          />
        ))}
      </section>
    </div>
  );
};
