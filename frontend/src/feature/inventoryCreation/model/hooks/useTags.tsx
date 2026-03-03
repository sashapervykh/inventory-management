import { useEffect, useState } from "react";
import type { Tag } from "../types/Tag";

export function useTags() {
  const [tags, setTags] = useState<Tag[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getCategories() {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tags`, {
          method: "GET",
          credentials: "include",
        });
        const tags = await response.json();
        setTags(tags);
      } catch {
        console.error("Error when getting tags");
      } finally {
        setLoading(false);
      }
    }

    getCategories();
  }, []);

  return { tags, loading };
}
