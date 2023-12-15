import { productsQueryKeys } from '~/composables';
import { useApiUrl } from '~/composables/use-api-url';
import { Product } from '~/types';
import { CacheDuration } from '~/types/cache-duration';

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
        'cache-control': `max-age=0 s-maxage=${CacheDuration.ONE_MINUTE}, stale-while-revalidate=${CacheDuration.ONE_HOUR}`,
        'content-type': 'application/json',
      }
    }
  );
});
