import { useState, type Key } from "react";
import Title from "antd/es/typography/Title";
import { UserInventoriesTable } from "./UserInventoriesTable/UserInventoriesTable";
import { UserInventoriesControls } from "./UserInventoriesControls/UserInventoriesControls";
import { useUserInventories } from "../model/hooks/useUserInventories";
import { ContactModal } from "./ContactModal/ContactModal";
import { useContactModal } from "../model/hooks/useContactModal";

export function UserInventories() {
  const { userInventories, isLoading } = useUserInventories();
  const [selectedKeys, setSelectedKeys] = useState<Key[]>([]);
  const { isOpen, close } = useContactModal();

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
      <ContactModal isOpen={isOpen} close={close} />
    </div>
  );
}
