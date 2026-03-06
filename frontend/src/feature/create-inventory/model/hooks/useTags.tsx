import { useCallback, useEffect, useRef, useState } from "react";
import type { Tag } from "../types/Tag";

export function useTags() {
  const [userQuery, setUserQuery] = useState("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const timerId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getTags() {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/tags?search=${userQuery}`,
          {
            method: "GET",
            credentials: "include",
            signal,
          },
        );
        const tags = await response.json();
        console.log(tags);
        setTags(tags);
      } catch {
        console.error("Error when getting tags");
      } finally {
        setLoading(false);
      }
    }

    console.log("new request");
    getTags();
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
      controller.abort();
    };
  }, [userQuery]);

  const handleInputChange = useCallback((value: string) => {
    if (timerId.current) clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      setUserQuery(value);
    }, 300);
  }, []);

  return { tags, loading, handleInputChange };
}
