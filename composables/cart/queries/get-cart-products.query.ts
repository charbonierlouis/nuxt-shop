import type { Product } from '~/types';
import { useQueries } from '@tanstack/vue-query';

export function useCartProductsQuery() {
  const cartStore = useCartStore();

  const cartProductsQueries = cartStore.cart?.products.map((product) => ({
    queryKey: productsQueryKeys.product(product.productId.toString()),
    queryFn: () =>
      $fetch<Product>(
        useFrontApiUrl(productsQueryKeys.product(product.productId.toString()),)
      ),
  }));

  return useQueries({
    queries: cartProductsQueries || [],
    combine: (queries) => {
      return queries.reduce((acc, query) => {
        if (query.data) {
          acc.push(query.data);
        }
        return acc;
      }, [] as Product[]);
    },
  });
}
