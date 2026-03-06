import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEditingUsers } from "./useEditingUsers";

export function useUsersAccess() {
  const { inventoryId } = useParams();
  const { editingUsers, setEditingUsers } = useEditingUsers();
  if (!inventoryId) throw new Error("The inventory id is required");

  const updateUsersAccess = useCallback(
    async (page?: number, newUserId?: string, limit: number = 10) => {
      try {
        const pageQuery = page ? `&page=${page}` : "";
        console.log(editingUsers);
        const newUsers = [...editingUsers, { id: newUserId }];
        console.log(newUsers);
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
        setEditingUsers(updatedUsersAccess);
      } catch (error) {
        console.log(error);
        console.error("Error when updating users access");
      }
    },
    [],
  );

  const getUsersAccess = useCallback(
    async (page?: number, limit: number = 10) => {
      try {
        const pageQuery = page ? `&page=${page}` : "";
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/inventories/${inventoryId}/access?limit=${limit}${pageQuery}`,
          {
            method: "GET",
            credentials: "include",
          },
        );
        if (!response.ok) {
          throw new Error("Error when updating users access");
        }
        const usersAccessInfo = await response.json();
        setEditingUsers(usersAccessInfo);
      } catch (error) {
        console.log(error);
        console.error("Error when updating users access");
      }
    },
    [],
  );

  useEffect(() => {
    getUsersAccess(1);
  }, []);

  return { updateUsersAccess, getUsersAccess };
}
