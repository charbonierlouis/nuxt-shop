import type { Product } from "@/types";

export function useGetCategoryProductsQuery(id: string) {
  const queryKey = productsQueryKeys.productsForCategory(id);
  
  return useApi<Product[]>(queryKey);
}