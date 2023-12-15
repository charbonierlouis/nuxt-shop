import type { Product } from '~/types';
import { useCartQuery } from './get-cart.query';
import { useQueries } from '@tanstack/vue-query';

export function useCartProductsQuery() {
  const { data: cart } = useCartQuery();

  const cartProductsQueries = cart?.value?.products.map((product) => ({
    queryKey: productsQueryKeys.product(product.productId.toString()),
    queryFn: () =>
      $fetch<Product>(
        useApiUrl(productsQueryKeys.product(product.productId.toString()))
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
