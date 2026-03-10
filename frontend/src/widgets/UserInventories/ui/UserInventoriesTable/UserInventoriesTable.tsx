import { Table, type TableProps } from "antd";
import type { UserInventories, UserInventory } from "../../model/UserInventory";
import { userInventoriesColumns } from "./userInventoriesColumns";
import { useNavigate } from "react-router-dom";
import type { Dispatch, Key, SetStateAction } from "react";

export function UserInventoriesTable({
  userInventories,
  setSelectedKeys,
}: {
  userInventories: UserInventories | undefined;
  setSelectedKeys?: Dispatch<SetStateAction<Key[]>>;
}) {
  const navigate = useNavigate();
  if (!userInventories || userInventories.length === 0) {
    return "No inventories in this category";
  }
  const rowSelection: TableProps<UserInventory>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[]) => {
      if (setSelectedKeys) {
        setSelectedKeys(selectedRowKeys);
      }
    },
  };
  return (
    <Table
      rowKey="id"
      rowSelection={setSelectedKeys ? rowSelection : undefined}
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
