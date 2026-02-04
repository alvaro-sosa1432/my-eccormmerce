import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";
import { GetProductsByCategory } from "../stack/GetProduct";
import { ProductsCard } from "../components/ProductsCard";

export const ProductListPage = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = GetProductsByCategory();

  if (error) return navigate("*");

  const productFiltered = (filtered) => {
    data?.filter((product) => product.category == filtered);
  };

  console.log(productFiltered("jewelery"));

  return (
    <div className="bg-orange-100/50 dark:bg-zinc-900 min-h-screen p-4 transition-all duration-300">
      {isPending && <Loader />}
      <section className="flex flex-col md:flex-row  mx-auto flex-wrap md:max-w-7xl mt-10">
        {data?.map((product) => (
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
