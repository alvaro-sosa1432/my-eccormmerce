import { useNavigate } from "react-router-dom";
import { GetProductsByCategory } from "../../stack/GetProduct";
import { Loader } from "../Loader";
import { ProductsCard } from "../ProductsCard";

export const CardProductDetail = ({ category, id }) => {
  const navigate = useNavigate();

  const { data, isPending, error } = GetProductsByCategory(category);

  const products = data?.filter((product) => product.id != id);

  if (error) {
    navigate("*");
  }
  return (
    <div className="flex flex-col text-center">
      <h2 className="text-2xl font-semibold my-5">Pueden Interesarte</h2>
      {isPending && <Loader />}
      <section className="flex flex-col md:flex-row flex-wrap">
        {products?.map((item) => (
          <ProductsCard
            key={item?.id}
            id={item?.id}
            title={item?.title}
            price={item?.price}
            image={item?.image}
          />
        ))}
      </section>
    </div>
  );
};
