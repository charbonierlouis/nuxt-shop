import { useQuery } from '@tanstack/vue-query';
import { cartQueryKeys } from './query-queys';
import type { Cart } from '@/types';

export function useCartQuery() {
  const localCart = process.client ? localStorage?.getItem('cart') : null;
  const cartId = localCart ? JSON.parse(localCart).id : null;
  const uri = useApiUrl(cartQueryKeys.cart(cartId || 0));

  return useQuery<Cart>({
    queryKey: cartQueryKeys.cart(cartId || -1),
    queryFn: () => $fetch<Cart>(uri),
  });
}
