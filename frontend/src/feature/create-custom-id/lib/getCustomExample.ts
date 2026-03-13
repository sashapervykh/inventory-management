import { getExamplePart } from "./getExamplePart";

type Items = {
  [key: string]: string;
}[];

export function getCustomIdExample(items: Items) {
  if (!items) return;
  console.log(items);
  const example: string[] = [];
  items.forEach((item) => example.push(getExamplePart(item)));
  return example.join("-");
}
