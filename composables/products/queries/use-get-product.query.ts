import type { Product } from "@/types";

export function useGetProductQuery(id: string) {
  const queryKey = productsQueryKeys.product(id);
  
  return useApi<Product>(queryKey);
}
