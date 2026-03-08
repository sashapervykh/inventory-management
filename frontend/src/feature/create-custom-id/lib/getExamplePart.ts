import { examplePartValue } from "./examplePartValue";

interface Props {
  [key: string]: string;
}

export function getExamplePart(props: Props) {
  const [type, value, ..._] = Object.values(props);
  return examplePartValue[type](value);
}
