import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchUsers } from "../../api/fetchUsers";
import type { StatusUpdateDto } from "../types/StatusUpdateDto";
import { fetchUpdatingUsersStatus } from "../../api/updateUsersStatus";
import { fetchUpdatingUsersType } from "../../api/updateUsersType";
import type { TypeUpdateDto } from "../types/TypeUpdateDto";
import { fetchDeletingUsers } from "../../api/fetchDeletingUsers";
import type { Key } from "react";
import { useNavigate } from "react-router-dom";
import { showNotification } from "../../../../shared/ui/showNotification/showNotification";
import { useUser } from "../../../../entity/user/model/useUser";

export function useUsers() {
  const navigate = useNavigate();
  const { setUser } = useUser();
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
    onSuccess: ({ affectedSelf }) => {
      if (affectedSelf) {
        showNotification({
          type: "error",
          title: "You lost admin status",
          description: "You revoked your admin status",
        });
        navigate("/home");
      }
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const { mutate: deleteUsers, isPending: isDeleting } = useMutation({
    mutationFn: (deletedUsersDto: Key[]) => {
      return fetchDeletingUsers(deletedUsersDto);
    },
    onSuccess: ({ affectedSelf }) => {
      if (affectedSelf) {
        setUser(null);
        showNotification({
          type: "error",
          title: "You lost access",
          description: "You deleted your account",
        });
        navigate("/home");
      }
      queryClient.invalidateQueries({ queryKey });
    },
  });
  return {
    users: data,
    isLoading: isLoading || isUpdatingStatus || isUpdatingType || isDeleting,
    updateUsersStatus,
    updateUsersType,
    deleteUsers,
  };
}
