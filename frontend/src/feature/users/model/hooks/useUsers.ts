import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from "../../api/fetchUsers";
import type { StatusUpdateDto } from "../types/StatusUpdateDto";
import { fetchUpdatingUsersStatus } from "../../api/updateUsers";

export function useUsers() {
  const queryClient = useQueryClient();
  const queryKey = ["allUsers"];
  const invalidateQueries = () => queryClient.invalidateQueries({ queryKey });

  const { data, isLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => fetchUsers(),
    staleTime: 0,
  });

  const { mutate: updateUsersStatus, isPending: isUpdatingStatus } =
    useMutation({
      mutationFn: (statusUpdateDto: StatusUpdateDto) => {
        return fetchUpdatingUsersStatus(statusUpdateDto);
      },
      onSuccess: invalidateQueries,
    });
  return {
    users: data,
    isLoading: isLoading || isUpdatingStatus,
    updateUsersStatus,
  };
}
