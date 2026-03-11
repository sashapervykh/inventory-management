import Title from "antd/es/typography/Title";
import { useUserInventories } from "../model/useUserInventories";
import { PopularInventoriesTable } from "./PopularInventoriesTable/PopularInventoriesTable";

export function PopularInventories() {
  const { userInventories, isLoading } = useUserInventories();
  if (isLoading) return "Loading...";

  return (
    <div>
      <Title level={3}>The Most Popular Repositories</Title>
      <PopularInventoriesTable inventories={userInventories?.owned} />
    </div>
  );
}
