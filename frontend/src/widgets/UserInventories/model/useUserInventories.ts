import { useQuery } from "@tanstack/react-query";
import { useUser } from "../../../entity/user/model/useUser";
import { getUserInventories } from "../api/getUserInventories";

export function useUserInventories() {
  const { user } = useUser();

  const queryKey = ["userInventories", user?.id];

  const { data: userInventories, isLoading } = useQuery({
    queryKey,
    queryFn: () => getUserInventories(),
  });

  return {
    userInventories,
    isLoading,
  };
}
