import { useNavigate } from "react-router-dom";
import type { FormDataType } from "../types/FormDataType";

export function useCreateInventory() {
  const navigate = useNavigate();

  const createInventory = async (values: FormDataType) => {
    try {
      console.log(values);
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/inventories`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        },
      );
      if (!response.ok) {
        throw new Error("Error when creating inventory");
      }
      const inventory = await response.json();
      console.log(inventory);
      navigate("/inventories");
    } catch (error) {
      console.log(error);
      console.error("Error when creating");
    }
  };

  return { createInventory };
}
