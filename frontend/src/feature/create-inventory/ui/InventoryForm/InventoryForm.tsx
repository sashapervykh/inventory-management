import { Form } from "antd";
import { useCreateInventory } from "../../model/hooks/useCreateInventory";
import { stepsForms } from "../StepsForms/stepsForms";
import { type FormInstance } from "antd/es/form/Form";

export function InventoryForm({
  current,
  form,
}: {
  current: number;
  form: FormInstance;
}) {
  const { createInventory } = useCreateInventory();

  return (
    <Form form={form} onFinish={createInventory}>
      {stepsForms[current]}
    </Form>
  );
}
