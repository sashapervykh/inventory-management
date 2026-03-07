import { useRef, useState } from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { HolderOutlined } from "@ant-design/icons";
import { Form, Input, Select } from "antd";

const options = [
  { value: "Fixed", label: "Fixed" },
  { value: "20-bit random", label: "20-bit random" },
  { value: "32-bit random", label: "32-bit random" },
  { value: "6-digit random", label: "6-digit random" },
  { value: "9-digit random", label: "9-digit random" },
  { value: "GUID", label: "GUID" },
  { value: "Date/time", label: "Date/time" },
];

export function SortableItem({ id, index }: { id: number; index: number }) {
  const [element, setElement] = useState<Element | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const { isDragging } = useSortable({ id, index, element, handle: handleRef });

  return (
    <div ref={setElement}>
      <Form.Item data-shadow={isDragging || undefined}>
        <div className="flex gap-3.5">
          <HolderOutlined ref={handleRef} />
          <Select className="w-40" defaultValue="Fixed" options={options} />
          <Input className="w-40" />
        </div>
      </Form.Item>
    </div>
  );
}
