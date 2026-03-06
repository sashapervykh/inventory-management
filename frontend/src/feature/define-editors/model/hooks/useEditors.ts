import { useQuery } from "@tanstack/react-query";
import { useInventoryId } from "../../../../shared/hooks/useInventoryId/useInventoryId";
import { getEditors } from "../../api/getEditors";

export function useEditors() {
  const { inventoryId } = useInventoryId();

  const queryKey = ["editors", inventoryId];

  const { data: editors = [], isLoading } = useQuery({
    queryKey,
    queryFn: () => getEditors(inventoryId),
  });

  return {
    editors,
    isLoading,
  };
}
