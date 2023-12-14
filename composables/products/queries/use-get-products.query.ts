import type { Product } from "~/types";

export function useGetProductsQuery() {
  const queryKey = productsQueryKeys.products();
  return useApi<Product[]>(queryKey);
}