import { useParams } from "react-router-dom";
import { ProductDetailSection } from "../components/ProductDetailSection";
import { GetProductById } from "../stack/GetProduct";
import { CardProductDetail } from "../components/CardProductDetail";

export const ProductDetailPage = () => {
  const { id } = useParams();

  const { data, isPending, error } = GetProductById(id);

  return (
    <main className="text-orange-400   mx-auto bg-orange-100/50 dark:bg-zinc-900  min-h-screen    ">
      <ProductDetailSection
        data={data}
        isPending={isPending}
        error={error}
        id={id}
      />
      <section className="max-w-6xl mx-auto">
        <CardProductDetail id={id} category={data?.category} />
      </section>
    </main>
  );
};
