import { productsQueryKeys } from '~/composables';
import { useApiUrl } from '~/composables/use-api-url';

export default defineEventHandler(async (event) => {
  const params = event.context.params;
  if (!params?.id) {
    return new Response('Missing id', { status: 400 });
  }

  //wait 10s to simulate a slow response
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const product = await $fetch(
    useApiUrl(productsQueryKeys.product(params?.id))
  );

  if (!product) {
    return new Response('Product not found', { status: 404 });
  }

  return new Response(
    JSON.stringify(product),
    {
      headers: {
        'cache-control': 'public, max-age=60',
      }
    }
  );
});
