import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useInventoryId } from "../../../../shared/hooks/useInventoryId/useInventoryId";
import { sendUpdatedIdFormat } from "../../api/sendUpdatedIdFormat";
import type { CustomIdPartsDto } from "../types/IdPartDto";

export function useCustomIdParts() {
  const { inventoryId } = useInventoryId();
  const queryClient = useQueryClient();

  const queryKey = ["id-parts", inventoryId];

  // const { data: editors = [], isLoading } = useQuery({
  //   queryKey,
  //   queryFn: () => getEditors(inventoryId),
  // });

  const { mutate: updateCustomIdParts } = useMutation({
    mutationFn: (customIdParts: CustomIdPartsDto) => {
      return sendUpdatedIdFormat(inventoryId, customIdParts);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey }),
  });

  return {
    // editors,
    // isLoading,
    updateCustomIdParts,
  };
}
