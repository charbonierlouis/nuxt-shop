import type { Cart } from "@/types";

export const cartQueryKeys = {
  cart: (id: Cart['id']) => ['carts', id.toString()],
}