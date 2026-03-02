import { useState } from "react";
import { useUser } from "../../../../entity/user/model/useUser";

export function useLogout() {
  const { setUser } = useUser();
  const [loading, setLoading] = useState<boolean>(false);

  const logout = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}auth/logout`,
        { method: "POST", credentials: "include" },
      );
      if (!response.ok) throw new Error("Logout failed");
      setUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
}
