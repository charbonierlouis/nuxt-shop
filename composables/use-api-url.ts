export function useApiUrl(queryKey: string[]) {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  
  return `${apiBase}/${queryKey.join('/')}`
}