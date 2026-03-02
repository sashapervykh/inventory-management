import { useEffect, useState } from "react";
import type { Category } from "../types/Category";

export function useCategories() {
  const [categories, setCategories] = useState<Category[] | undefined>(
    undefined,
  );

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/categories`,
          {
            method: "GET",
            credentials: "include",
          },
        );
        console.log(response);
        const categories = await response.json();
        console.log(categories);
        setCategories(categories);
      } catch {
        console.error("Error when creating");
      }
    }

    getCategories();
  }, []);

  return { categories };
}
