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
    <div>
      {currentStep > 0 && <Button onClick={moveBack}>Back</Button>}
      {currentStep < stepsItems.length - 1 && (
        <Button onClick={moveNext}>Continue</Button>
      )}
    </div>
  );
}
