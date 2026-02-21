import { useEffect, useState } from "react";

export function HomePage() {
  const [user, setUser] = useState<object | null>(null);
  useEffect(() => {
    if (user) return;
    async function getUser() {
      try {
        console.log("start");
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}users/me`,
          { method: "GET", credentials: "include" },
        );
        const user = await response.json();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);
  return user ? <div>{user.first_name}</div> : <div>HOME</div>;
}
