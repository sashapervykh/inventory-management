import { useParams } from "react-router-dom";
import { useInventory } from "../model/hooks/useInventory";
import Title from "antd/es/typography/Title";

export function Inventory() {
  const { inventoryId } = useParams();
  const { inventory } = useInventory(inventoryId ?? "");
  return (
    <>
      <Title>{inventory?.title}</Title>
      <div>Category {inventory?.category.name}</div>
      <div>Description {inventory?.description}</div>
    </>
  );
}
