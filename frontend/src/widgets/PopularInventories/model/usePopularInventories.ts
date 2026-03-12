import { useQuery } from "@tanstack/react-query";
import { getPopularInventories } from "../api/getPopularInventories";

export function useUserInventories() {
  const queryKey = ["popularInventories"];

  const { data: popularInventories, isLoading } = useQuery({
    queryKey,
    queryFn: () => getPopularInventories(),
  });

  return {
    popularInventories,
    isLoading,
  };
}
