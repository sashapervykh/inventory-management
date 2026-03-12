import { Table } from "antd";
import type { PopularInventory } from "../../model/PopularInventory";
import { useNavigate } from "react-router-dom";
import { popularInventoriesColumns } from "./popularInventoriesColumns";

export function PopularInventoriesTable({
  inventories,
}: {
  inventories: PopularInventory[] | undefined;
}) {
  const navigate = useNavigate();
  if (!inventories || inventories.length === 0) {
    return "No inventories in this category";
  }

  return (
    <Table
      rowKey="id"
      dataSource={inventories}
      columns={popularInventoriesColumns}
      pagination={false}
      onRow={(record) => ({
        onClick: () => {
          navigate(`/inventories/${record.id}`);
        },
        className: "cursor-pointer",
      })}
    />
  );
}
