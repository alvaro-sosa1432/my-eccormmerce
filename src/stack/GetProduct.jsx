import { useQuery } from "@tanstack/react-query";

export const GetProducts = () => {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  };

  return useQuery({
    queryKey: ["Show  Products"],
    queryFn: fetchProducts,
  });
};

export const GetProductById = (id) => {
  const fetchProductById = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  };

  return useQuery({
    queryKey: ["Show Sinfle Product", id],
    queryFn: fetchProductById,
    enabled: !!id,
  });
};
