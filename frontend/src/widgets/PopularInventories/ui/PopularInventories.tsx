import Title from "antd/es/typography/Title";
import { useUserInventories } from "../model/usePopularInventories";
import { PopularInventoriesTable } from "./PopularInventoriesTable/PopularInventoriesTable";

export function PopularInventories() {
  const { popularInventories, isLoading } = useUserInventories();
  return (
    <div>
      <Title level={3}>The Most Popular Repositories</Title>
      <PopularInventoriesTable
        inventories={popularInventories}
        loading={isLoading}
      />
    </div>
  );
}
