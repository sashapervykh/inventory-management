import { Table } from "antd";
import type { LatestInventory } from "../../model/LatestInventory";
import { useNavigate } from "react-router-dom";
import { latestInventoriesColumns } from "./latestInventoriesColumns";

export function LatestInventoriesTable({
  inventories,
  loading,
}: {
  inventories: LatestInventory[] | undefined;
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
      columns={latestInventoriesColumns}
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
