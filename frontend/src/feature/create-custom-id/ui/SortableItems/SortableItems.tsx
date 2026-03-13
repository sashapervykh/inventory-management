import type { CustomIdPart } from "../../model/types/CustomIdPart";
import { SortableItem } from "./SortableItem";

export function SortableItems({ items }: { items: CustomIdPart[] }) {
  return items.map((item, index) => {
    return (
      <SortableItem
        key={item.key}
        type={item.type}
        name={item.name}
        id={item.id}
        index={index}
      />
    );
  });
}
