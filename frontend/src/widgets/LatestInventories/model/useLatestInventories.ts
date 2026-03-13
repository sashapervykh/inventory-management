import { useQuery } from "@tanstack/react-query";
import { getLatestInventories } from "../api/getLatestInventories";

export function useLatestInventories() {
  const queryKey = ["latestInventories"];

  const { data: latestInventories, isLoading } = useQuery({
    queryKey,
    queryFn: () => getLatestInventories(),
  });

  return {
    latestInventories,
    isLoading,
  };
}
