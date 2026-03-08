import { useDroppable } from "@dnd-kit/react";

export function Droppable() {
  const { ref } = useDroppable({
    id: "droppable",
  });
  return <div className="w-[200px] h-[100px] bg-amber-200" ref={ref}></div>;
}
