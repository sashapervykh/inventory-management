import { useEffect, useRef, useState } from "react";
import { useSortable } from "@dnd-kit/react/sortable";
import { HolderOutlined } from "@ant-design/icons";
import { PartsSelector } from "../PartsSelector/PartsSelector";
import type { CustomIdPart } from "../../model/types/CustomIdPart";
import { PartsValue } from "../PartsValue/PartsValue";
import useFormInstance from "antd/es/form/hooks/useFormInstance";
import type { IdPartType } from "../../model/types/IdPartType";
import { ID_PARTS_TYPES } from "../../constants/idPartsTypes";
import { DEFAULT_FIXED_VALUE } from "../../constants/idPartsValues/defaultFixedValue";
import { examplePartOptions } from "../../constants/idPartsOptions/examplePartOptions";

export function SortableItem({
  name,
  index,
  type,
}: CustomIdPart & { index: number }) {
  const handleRef = useRef<HTMLButtonElement | null>(null);
  const form = useFormInstance();
  const [chosenType, setChosenType] = useState(type);
  const { ref } = useSortable({
    id: name,
    index,
    handle: handleRef,
  });

  const handleTypeChange = (newType: IdPartType) => {
    setChosenType(newType);
    const defaultValue =
      newType === ID_PARTS_TYPES.FIXED
        ? DEFAULT_FIXED_VALUE
        : examplePartOptions[newType][0].value;
    form.setFieldValue(["id-parts", name, `${name}-2`], defaultValue);
  };

  return (
    <div
      ref={ref}
      className="grid grid-cols-[20px_minmax(100px,140px)_auto] gap-3.5"
    >
      <HolderOutlined ref={handleRef} className="flex h-fit mt-1.75" />
      <PartsSelector
        name={name}
        type={chosenType}
        onChange={handleTypeChange}
      />
      <PartsValue type={chosenType} name={name} />
    </div>
  );
}
