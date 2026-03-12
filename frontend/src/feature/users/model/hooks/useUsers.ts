import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../api/fetchUsers";

export function useUsers() {
  const { data, isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => fetchUsers(),
    staleTime: 0,
  });
  return {
    users: data,
    isLoading,
  };
}
