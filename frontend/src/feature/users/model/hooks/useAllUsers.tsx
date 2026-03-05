import { useCallback, useEffect, useState } from "react";
import type { User } from "../../../../entity/user/model/User";

export function useAllUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async (search?: string, limit: number = 10) => {
    try {
      const searchQuery = search ? `&search=${search}` : "";
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users?limit=${limit}${searchQuery}`,
        {
          method: "GET",
          credentials: "include",
        },
      );
      if (!response.ok) {
        throw new Error("Error when getting users");
      }
      const updatedUsers = await response.json();
      setUsers(updatedUsers);
    } catch (error) {
      console.log(error);
      console.error("Error when getting users");
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return { users, getUsers };
}
