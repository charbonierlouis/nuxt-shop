import type { Cart, Product } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

export type AddProductInputs = {
  cart: Cart | null;
  product: Product;
  quantity: number;
};

function addProduct(cart: Cart, product: Product, quantity: number): Cart {
  if (cart.products.some((p) => p.productId === product.id)) {
    return {
      ...cart,
      products: cart.products.map((p) => {
        if (p.productId === product.id) {
          return {
            ...p,
            quantity: p.quantity + quantity,
          };
        }

        return p;
      }),
    };
  }

  return {
    ...cart,
    products: [
      ...cart.products,
      {
        productId: product.id,
        quantity,
      },
    ],
  };
}

function mutationFn({ cart, product, quantity }: AddProductInputs) {
  const uri = useApiUrl(['carts']);

  if (!cart) {
    throw new Error('Cart not found');
  }

  return $fetch<Cart>(uri, {
    method: 'POST',
    body: JSON.stringify({
      products: addProduct(cart, product, quantity).products,
    }),
  });
}

export function useAddProductToCartMutation() {
  const queryClient = useQueryClient();
  const cartStore = useCartStore();

  return useMutation<Cart, Error, AddProductInputs>({
    mutationFn: (props: Omit<AddProductInputs, 'cart'>) =>
      mutationFn({ ...props, cart: cartStore.cart }),
    onSuccess: (data) => {
      if (process.client) {
        localStorage?.setItem('cart', JSON.stringify(data));
      }
      cartStore.setCart(data);
      queryClient.setQueryData(cartQueryKeys.cart(data.id), data);
    },
  });
}
