import { useRef, useState } from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { HolderOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { PartsSelector } from "../PartsSelector/PartsSelector";
import type { CustomIdPart } from "../../model/types/CustomIdPart";
import { PartsValue } from "../PartsValue/PartsValue";

export function SortableItem({
  name,
  index,
  type,
}: CustomIdPart & { index: number }) {
  const [element, setElement] = useState<Element | null>(null);
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const { isDragging } = useSortable({
    id: name,
    index,
    element,
    handle: handleRef,
  });

  return (
    <div
      ref={setElement}
      className="grid grid-cols-[20px_minmax(100px,140px)_auto] gap-3.5"
    >
      <HolderOutlined ref={handleRef} className="flex h-fit mt-1.75" />
      <PartsSelector name={name} type={type} />
      <PartsValue type={type} name={name} />
    </div>
  );
}
