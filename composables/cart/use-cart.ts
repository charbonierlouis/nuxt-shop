import type { Product } from '~/types';
import {
  useAddProductToCartMutation,
  useCreateCartMutation,
} from './mutations';
import { useCartQuery } from './queries';

export function useCart() {
  const { mutateAsync: createCart, isPending: createCartIsPending } = useCreateCartMutation();
  const { mutateAsync: addProduct, isPending: addProductIsPending } = useAddProductToCartMutation();
  const cart = useCartQuery();

  async function addProductToCart(product: Product, quantity = 1) {
    if (!cart.data.value) {
      await createCart();
    }
    await addProduct({ product, quantity });
  }

  return {
    addProductToCart,
    isLoading: createCartIsPending.value || addProductIsPending.value,
  }
}
