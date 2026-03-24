import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import type { Key } from "react";
import { useUser } from "../../../../entity/user/model/useUser";
import { getUserInventories } from "../../api/getUserInventories";
import { sendDeletedInventories } from "../../api/sendDeletedInventories";

export function useUserInventories() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const queryKey = ["userInventories", user?.id];

  const { data: userInventories, isLoading } = useQuery({
    queryKey,
    queryFn: () => getUserInventories(),
  });

  const { mutate: deleteUserInventories } = useMutation({
    mutationFn: (deletedInventories: Key[]) => {
      return sendDeletedInventories(deletedInventories);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  return {
    userInventories,
    isLoading,
    deleteUserInventories,
  };
}
