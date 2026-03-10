import { Table } from "antd";
import type { UserInventories } from "../../model/UserInventory";
import { userInventoriesColumns } from "./userInventoriesColumns";

export function UserInventoriesTable({
  userInventories,
}: {
  userInventories: UserInventories | undefined;
}) {
  if (!userInventories || userInventories.length === 0) {
    return "No inventories in this category";
  }

  return (
    <Table
      dataSource={userInventories}
      columns={userInventoriesColumns}
    ></Table>
  );
}
