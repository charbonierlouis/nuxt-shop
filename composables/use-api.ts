export function useApi<Entity>(
  queryKey: string[],
) {
  const uri = useApiUrl(queryKey)


  return useFetch<Entity>(uri, {
    key: queryKey.join('/'),
  });
}
