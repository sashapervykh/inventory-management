import { Button } from "antd";
import type { Dispatch, SetStateAction } from "react";
import { stepsItems } from "../CreationSteps/StepsItems";

export function ControlButtons({
  currentStep,
  changeStep,
}: {
  currentStep: number;
  changeStep: Dispatch<SetStateAction<number>>;
}) {
  const moveBack = () => {
    changeStep((c) => c - 1);
  };
  const moveNext = () => {
    changeStep((c) => c + 1);
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
    </div>
  );
}
