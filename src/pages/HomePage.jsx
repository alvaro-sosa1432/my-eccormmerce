import { GetProducts } from "../stack/GetProduct";
import { Banner } from "../components/Banner";
import { ProductsCard } from "../components/ProductsCard";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/Loader";

export const HomePage = () => {
  const navigate = useNavigate();

  const { data, isPending, error } = GetProducts();

  if (error) return navigate("*");

  return (
    <main className=" bg-orange-100/65 dark:bg-zinc-900 min-h-screen transition-all duration-300  ">
      <Banner />
      {isPending && <Loader />}
      <section className="mt-10 flex flex-col sm:flex-row flex-wrap md:max-w-3xl xl:max-w-5xl justify-center mx-auto ">
        {data?.slice(0, 10).map((product) => (
          <ProductsCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
    </main>
  );
};
