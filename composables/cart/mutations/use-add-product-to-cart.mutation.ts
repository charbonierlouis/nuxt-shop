import type { Cart, Product } from '@/types';
import { useMutation, useQueryClient } from '@tanstack/vue-query';

export type AddProductInputs = {
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

function mutationFn({ product, quantity }: AddProductInputs) {
  const uri = useApiUrl(['carts']);
  const cart = localStorage.getItem('cart');
  const parsedCart: Cart | null = cart ? JSON.parse(cart) : null;

  if (!parsedCart) {
    throw new Error('Cart not found');
  }

  return $fetch<Cart>(uri, {
    method: 'POST',
    body: JSON.stringify({
      products: addProduct(parsedCart, product, quantity).products,
    }),
  });
}

export function useAddProductToCartMutation() {
  const queryClient = useQueryClient();
  return useMutation<Cart, Error, AddProductInputs>({
    mutationFn,
    onSuccess: (data, variables) => {
      if (process.client) {
        localStorage?.setItem('cart', JSON.stringify(data));
      }
      queryClient.setQueryData(cartQueryKeys.cart(data.id), data);
    },
  });
}
