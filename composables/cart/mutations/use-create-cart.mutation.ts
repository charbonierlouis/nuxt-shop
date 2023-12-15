import { useMutation, useQueryClient } from "@tanstack/vue-query"
import type { Cart } from "@/types"

function mutationFn() {
  const uri = useApiUrl(['carts']);
  return $fetch<Cart>(
    uri,
    {
      method: 'POST',
      body: JSON.stringify({
        date: new Date().toISOString(),
        products: []
      }),
    }
  )
}

export function useCreateCartMutation() {
  const queryClient = useQueryClient();

  return useMutation<Cart>({
    mutationFn,
    onSuccess: (data) => {
      if (process.client) {
        localStorage?.setItem('cart', JSON.stringify(data));
      }
      queryClient.setQueryData(cartQueryKeys.cart(data.id), data);
    }
  })
}