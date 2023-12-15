import type { Product } from "@/types";
import { useQuery } from "@tanstack/vue-query";

export function useCartProductQuery(id: number) {
  return useQuery({
    queryKey: productsQueryKeys.product(id.toString()),
    queryFn: () =>
      $fetch<Product>(
        useFrontApiUrl(productsQueryKeys.product(id.toString()),)
      ),
  })
}