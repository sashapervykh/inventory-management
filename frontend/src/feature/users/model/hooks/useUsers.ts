import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from "../../api/fetchUsers";
import type { StatusUpdateDto } from "../types/StatusUpdateDto";
import { fetchUpdatingUsersStatus } from "../../api/updateUsersStatus";
import { fetchUpdatingUsersType } from "../../api/updateUsersType";
import type { TypeUpdateDto } from "../types/TypeUpdateDto";
import { fetchDeletingUsers } from "../../api/fetchDeletingUsers";
import type { Key } from "react";

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

  const { mutate: updateUsersType, isPending: isUpdatingType } = useMutation({
    mutationFn: (typeUpdateDto: TypeUpdateDto) => {
      return fetchUpdatingUsersType(typeUpdateDto);
    },
    onSuccess: invalidateQueries,
  });

  const { mutate: deleteUsers, isPending: isDeleting } = useMutation({
    mutationFn: (deletedUsersDto: Key[]) => {
      return fetchDeletingUsers(deletedUsersDto);
    },
    onSuccess: invalidateQueries,
  });
  return {
    users: data,
    isLoading: isLoading || isUpdatingStatus || isUpdatingType || isDeleting,
    updateUsersStatus,
    updateUsersType,
    deleteUsers,
  };
}
