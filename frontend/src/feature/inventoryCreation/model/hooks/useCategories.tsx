import type { FormDataType } from "../types/FormDataType";

export function useCategories() {
  const createInventory = async (values: FormDataType) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/categories`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        },
      );
      const inventory = await response.json();
      console.log(inventory);
    } catch {
      console.error("Error when creating");
    }
  };

  return { createInventory };
}
