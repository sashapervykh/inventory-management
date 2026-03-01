import { Card } from "antd";
import { InventoryForm } from "../InventoryForm/InventoryForm";
import { CreationSteps } from "../CreationSteps/CreationSteps";
import { useState } from "react";
import { ControlButtons } from "../ControlButtons/ControlButtons";
import { useForm } from "antd/es/form/Form";

export function MultistepForm() {
  const [current, setCurrent] = useState(0);
  const [form] = useForm();
  return (
    <>
      <CreationSteps current={current} />
      <Card>
        <InventoryForm form={form} current={current} />
        <ControlButtons
          form={form}
          currentStep={current}
          changeStep={setCurrent}
        />
      </Card>
    </>
  );
}
