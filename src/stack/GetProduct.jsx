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
    queryKey: ["Show Single Product", id],
    queryFn: fetchProductById,
    enabled: !!id,
  });
};

export const GetProductsByCategory = (category) => {
  const url = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products";
  const fetctProductsByCategory = async () => {
    const response = await fetch(url);
    return response.json();
  };

  return useQuery({
    queryKey: ["Show products by category", category || "all"],
    queryFn: fetctProductsByCategory,
    enabled: true,
  });
};
