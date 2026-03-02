import { Button, type FormInstance } from "antd";
import { useState, type Dispatch, type SetStateAction } from "react";
import { stepsItems } from "../CreationSteps/StepsItems";
import { ControlOutlined } from "@ant-design/icons";
import { useCreateInventory } from "../../model/hooks/useCreateInventory";

export function ControlButtons({
  currentStep,
  changeStep,
  form,
}: {
  currentStep: number;
  changeStep: Dispatch<SetStateAction<number>>;
  form: FormInstance;
}) {
  const [formData, setFormData] = useState({});
  const { createInventory } = useCreateInventory();
  const moveBack = () => {
    changeStep((c) => c - 1);
  };
  const moveNext = async () => {
    const values = await form.validateFields();
    setFormData({ ...formData, ...values });
    changeStep((c) => c + 1);
  };
  const onFinish = () => {
    createInventory(formData);
  };

  return (
    <div className="flex gap-2.5 m-auto w-fit">
      {currentStep > 0 && (
        <Button type="primary" onClick={moveBack}>
          Back
        </Button>
      )}
      {currentStep < stepsItems.length - 1 && (
        <Button type="primary" onClick={moveNext}>
          Continue
        </Button>
      )}
      {currentStep === stepsItems.length - 1 && (
        <Button type="primary" onClick={onFinish}>
          Create
        </Button>
      )}
    </div>
  );
}
