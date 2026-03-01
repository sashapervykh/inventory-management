import { Form } from "antd";
import { useCreateInventory } from "../../model/useCreateInventory";
import { stepsForms } from "../StepsForms/stepsForms";

export function InventoryForm({ current }: { current: number }) {
  const { createInventory } = useCreateInventory();

  return <Form onFinish={createInventory}>{stepsForms[current]}</Form>;
}
