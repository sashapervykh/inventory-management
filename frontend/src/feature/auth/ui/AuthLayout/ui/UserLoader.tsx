import { useEffect, useState, type ReactNode } from "react";
import { useUser } from "../../../../../entity/user/model/useUser";
import { Spin } from "antd";

export function UserLoader({ children }: { children: ReactNode }) {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) return;
    async function getUser() {
      console.log("request");
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}users/me`,
          { method: "GET", credentials: "include" },
        );
        if (!response.ok) throw new Error("Authentication failed");
        const user = await response.json();
        setUser(user);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);

  // if (loading) return <Spin />;
  return <>{children}</>;
}
