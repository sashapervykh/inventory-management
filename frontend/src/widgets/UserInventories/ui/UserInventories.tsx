import Title from "antd/es/typography/Title";
import { useUserInventories } from "../model/useUserInventories";
import { UserInventoriesTable } from "./UserInventoriesTable/UserInventoriesTable";

export function UserInventories() {
  const { userInventories, isLoading } = useUserInventories();

  if (isLoading) return "Loading...";

  return (
    <div>
      <Title level={3}>My Repositories</Title>
      <UserInventoriesTable userInventories={userInventories?.owned} />
      <Title level={3}>Repositories I can edit</Title>
      <UserInventoriesTable userInventories={userInventories?.edited} />
    </div>
  );
}
