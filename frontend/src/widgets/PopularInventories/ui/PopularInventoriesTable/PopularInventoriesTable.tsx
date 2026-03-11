import { Table, type TableProps } from "antd";
import type { UserInventories, UserInventory } from "../../model/UserInventory";

import { useNavigate } from "react-router-dom";
import type { Dispatch, Key, SetStateAction } from "react";
import { popularInventoriesColumns } from "./popularInventoriesColumns";
import type { Inventory } from "../../../../entity/inventory/model/types/Inventory";

export function PopularInventoriesTable({
  inventories,
}: {
  inventories: Inventory[] | undefined;
}) {
  const navigate = useNavigate();
  if (!inventories || inventories.length === 0) {
    return "No inventories in this category";
  }

  return (
    <Table
      rowKey="id"
      columns={popularInventoriesColumns}
      onRow={(record) => ({
        onClick: () => {
          navigate(`/inventories/${record.id}`);
        },
        className: "cursor-pointer",
      })}
    />
  );
}
