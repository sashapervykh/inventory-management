import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useInventoryId } from "../../../../shared/hooks/useInventoryId/useInventoryId";
import { getEditors } from "../../api/getEditors";
import { sendUpdatedEditors } from "../../api/sendUpdatedEditors";
import type { Editors } from "../types/Editors";

export function useEditors() {
  const { inventoryId } = useInventoryId();
  const queryClient = useQueryClient();

  const queryKey = ["editors", inventoryId];

  const { data: editors = [], isLoading } = useQuery({
    queryKey,
    queryFn: () => getEditors(inventoryId),
  });

  const { mutate: updateEditors } = useMutation({
    mutationFn: (newEditors: Editors) => {
      const finalEditors = [...editors, ...newEditors];
      return sendUpdatedEditors(inventoryId, finalEditors);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  return {
    editors,
    isLoading,
    updateEditors,
  };
}
