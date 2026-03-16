import { Table } from "antd";
import type { PopularInventory } from "../../model/PopularInventory";
import { useNavigate } from "react-router-dom";
import { popularInventoriesColumns } from "./popularInventoriesColumns";

export function PopularInventoriesTable({
  inventories,
  loading,
}: {
  inventories: PopularInventory[] | undefined;
  loading: boolean;
}) {
  const navigate = useNavigate();
  if (!loading && (!inventories || inventories.length === 0)) {
    return "No inventories in this category";
  }

  return (
    <Table
      rowKey="id"
      loading={loading}
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
