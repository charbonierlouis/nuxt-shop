import { productsQueryKeys } from '~/composables';
import { useApiUrl } from '~/composables/use-api-url';
import { Product } from '~/types';

export default defineEventHandler(async (event) => {
  const params = event.context.params;
  if (!params?.id) {
    return new Response('Missing id', { status: 400 });
  }

  //wait 5s to simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const product = await $fetch<Product>(
    useApiUrl(productsQueryKeys.product(params?.id))
  );

  if (!product) {
    return new Response('Product not found', { status: 404 });
  }

  return new Response(
    JSON.stringify(product),
    {
      status: 200,
      headers: {
        'cache-control': 'public, max-age=60',
        'content-type': 'application/json',
      }
    }
  );
});
