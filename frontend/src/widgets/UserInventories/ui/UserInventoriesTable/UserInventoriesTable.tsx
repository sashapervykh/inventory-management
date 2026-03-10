import { Table } from "antd";
import type { UserInventories } from "../../model/UserInventory";
import { userInventoriesColumns } from "./userInventoriesColumns";
import { useNavigate } from "react-router-dom";

export function UserInventoriesTable({
  userInventories,
}: {
  userInventories: UserInventories | undefined;
}) {
  const navigate = useNavigate();
  if (!userInventories || userInventories.length === 0) {
    return "No inventories in this category";
  }

  return (
    <Table
      dataSource={userInventories}
      columns={userInventoriesColumns}
      onRow={(record) => ({
        onClick: () => {
          navigate(`/inventories/${record.id}`);
        },
        className: "cursor-pointer",
      })}
    />
  );
}
