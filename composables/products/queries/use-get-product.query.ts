import type { Product } from "@/types";
import { useFrontApi } from "@/composables/use-api";

export function useGetProductQuery(id: string) {
  const queryKey = productsQueryKeys.product(id);
  
  return useFrontApi<Product>(queryKey);
}
