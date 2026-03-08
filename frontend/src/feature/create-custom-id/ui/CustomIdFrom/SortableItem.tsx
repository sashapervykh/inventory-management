import { useRef, useState, type Dispatch, type SetStateAction } from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { HolderOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";

const options = [
  { value: "Fixed", label: "Fixed" },
  { value: "20-bit random", label: "20-bit random" },
  { value: "32-bit random", label: "32-bit random" },
  { value: "6-digit random", label: "6-digit random" },
  { value: "9-digit random", label: "9-digit random" },
  { value: "GUID", label: "GUID" },
  { value: "Date/time", label: "Date/time" },
];

export function SortableItem({
  name,
  index,
  setItems,
}: {
  name: number;
  index: number;
  setItems: Dispatch<
    SetStateAction<
      {
        name: string;
        key: number;
        id: number;
      }[]
    >
  >;
}) {
  const [element, setElement] = useState<Element | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const { isDragging } = useSortable({
    id: name,
    index,
    element,
    handle: handleRef,
  });

  return (
    <div ref={setElement}>
      <div className="flex gap-3.5">
        {index}
        {" || "}
        {name}
        <HolderOutlined ref={handleRef} />
        <Form.Item
          name={[name, `${name}-1`]}
          data-shadow={isDragging || undefined}
        >
          <Select className="w-40" defaultValue="Fixed" options={options} />
        </Form.Item>
        <Form.Item
          name={[name, `${name}-2`]}
          data-shadow={isDragging || undefined}
        >
          <Input className="w-40" />
        </Form.Item>{" "}
        <Button
          onClick={() => {
            setItems((i) => i.filter((elem) => elem.id !== name));
          }}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}
