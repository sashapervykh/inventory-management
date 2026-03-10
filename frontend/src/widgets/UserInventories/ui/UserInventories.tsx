import { useState, type Key } from "react";
import Title from "antd/es/typography/Title";
import { useUserInventories } from "../model/useUserInventories";
import { UserInventoriesTable } from "./UserInventoriesTable/UserInventoriesTable";
import { UserInventoriesControls } from "./UserInventoriesControls/UserInventoriesControls";

export function UserInventories() {
  const { userInventories, isLoading } = useUserInventories();
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);

  if (isLoading) return "Loading...";

  return (
    <div>
      <UserInventoriesControls selectedInventories={selectedKeys} />
      <Title level={3}>My Repositories</Title>
      <UserInventoriesTable
        userInventories={userInventories?.owned}
        setSelectedKeys={setSelectedKeys}
      />
      <Title level={3}>Repositories I can edit</Title>
      <UserInventoriesTable userInventories={userInventories?.edited} />
    </div>
  );
}
