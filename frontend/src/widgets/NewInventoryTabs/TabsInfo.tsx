import { RequiredFiles } from "./RequiredFields";

export const TabsInfo = [
  {
    key: "REQUIRED",
    label: "REQUIRED FIELDS",
    children: <RequiredFiles />,
  },
  {
    key: "CUSTOM ID",
    label: "CUSTOM ID",
    children: <div>CUSTOM ID</div>,
  },
  {
    key: "CUSTOM FIELDS",
    label: "CUSTOM FIELDS",
    children: <div>CUSTOM FIELDS</div>,
  },
];
