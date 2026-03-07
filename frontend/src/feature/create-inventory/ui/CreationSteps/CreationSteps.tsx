import { Steps } from "antd";
import { stepsItems } from "./StepsItems";

export function CreationSteps({ current }: { current: number }) {
  return <Steps current={current} items={stepsItems}></Steps>;
}
