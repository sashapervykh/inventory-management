import Title from "antd/es/typography/Title";
import { InventoryForm } from "../../feature/inventory/ui/InventoryForm/InventoryForm";

export function CreatePage() {
  return (
    <div className="flex flex-col w-[95%] mr-auto ml-auto">
      <Title className="flex justify-center">Create Your Inventory</Title>
      <InventoryForm />
    </div>
  );
}
