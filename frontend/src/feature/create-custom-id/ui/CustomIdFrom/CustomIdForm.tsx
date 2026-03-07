import { useState } from "react";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { SortableItem } from "./SortableItem";

export function CustomIdForm() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <DragDropProvider
      onDragEnd={(event) => {
        setItems((items) => move(items, event));
      }}
    >
      <div className="list">
        {items.map((id, index) => (
          <SortableItem key={id} id={id} index={index} />
        ))}
      </div>
    </DragDropProvider>
  );
}
