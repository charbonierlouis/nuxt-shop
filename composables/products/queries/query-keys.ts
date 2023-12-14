export const productsQueryKeys = {
  products: () => ['products'],
  product: (id: string) => ['products', id],
  productsForCategory: (category: string) => ['products', 'category', category],
}