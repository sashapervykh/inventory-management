import { useEffect, useState } from "react";

export function UserInventories() {
  const [inventories, setInventories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/users/me/inventories`,
          {
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          },
        );
        console.log(response);
        const inventories = await response.json();
        console.log(inventories);
        setInventories(inventories.owned);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    get();
  }, []);

  if (loading) return "Loading...";
  if (inventories.length === 0) return "No inventories found";
  console.log(inventories);
  return (
    <div>
      {inventories.map((elem) => (
        <div key={elem.id}>{elem.title}</div>
      ))}
    </div>
  );
}
