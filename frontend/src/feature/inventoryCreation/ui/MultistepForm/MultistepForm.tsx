import { Card } from "antd";
import { InventoryForm } from "../InventoryForm/InventoryForm";
import { CreationSteps } from "../CreationSteps/CreationSteps";
import { useState } from "react";
import { ControlButtons } from "../ControlButtons/ControlButtons";

export function MultistepForm() {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <CreationSteps current={current} />
      <Card>
        <InventoryForm current={current} />
        <ControlButtons currentStep={current} changeStep={setCurrent} />
      </Card>
    </>
  );
}
