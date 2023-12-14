import type { Category } from "~/types";
import { categoriesQueryKeys } from "./query-keys";

export function useGetCategoriesQuery() {
  const queryKey = categoriesQueryKeys.categories();
  return useApi<Category[]>(queryKey);
}