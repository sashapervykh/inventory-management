type FieldType = {
  title: string;
  description: string;
  isPublic?: boolean;
};

export function useCreateInventory() {
  const createInventory = async (values: FieldType) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}inventories`,
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
