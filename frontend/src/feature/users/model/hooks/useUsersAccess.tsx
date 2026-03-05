import { useCallback, useState } from "react";
import type { User } from "../../../../entity/user/model/User";
import { useParams } from "react-router-dom";

export function useUsersAccess() {
  const { inventoryId } = useParams();
  const [usersAccess, setUsersAccess] = useState<User[]>([]);
  if (!inventoryId) throw new Error("The inventory id is required");

  const updateUsersAccess = useCallback(
    async (page?: number, newUserId?: string, limit: number = 10) => {
      try {
        const pageQuery = page ? `&page=${page}` : "";
        const newUsers = [...usersAccess, { id: newUserId }];
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/inventories/${inventoryId}/access?limit=${limit}${pageQuery}`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUsers),
          },
        );
        if (!response.ok) {
          throw new Error("Error when updating users access");
        }
        const updatedUsersAccess = await response.json();
        setUsersAccess(updatedUsersAccess);
      } catch (error) {
        console.log(error);
        console.error("Error when updating users access");
      }
    },
    [],
  );

  return { updateUsersAccess };
}
