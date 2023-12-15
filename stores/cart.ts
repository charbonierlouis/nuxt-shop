import type { Cart } from '@/types';

export interface CartStoreState {
  cart: Cart | null;
}

export const useCartStore = defineStore('cart', {
  state: (): CartStoreState => ({ cart: null }),
  getters: {},
  actions: {
    init(): void {
      const localCart = process.client ? localStorage.getItem('cart') : null;
      this.cart = localCart ? JSON.parse(localCart) : null;
    },

    setCart(cart: Cart | null): void {
      this.cart = cart;
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    },
  },
});
