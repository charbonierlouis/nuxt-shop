export function useApiUrl(queryKey: string[]) {
  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase
  
  return `${apiBase}/${queryKey.join('/')}`
}

export function useFrontApiUrl(queryKey: string[]) {
  const apiBase = '/api'
  
  return `${apiBase}/${queryKey.join('/')}`
}