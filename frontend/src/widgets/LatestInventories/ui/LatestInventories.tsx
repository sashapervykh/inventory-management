import Title from "antd/es/typography/Title";
import { useLatestInventories } from "../model/useLatestInventories";
import { LatestInventoriesTable } from "./LatestInventoriesTable/LatestInventoriesTable";

export function LatestInventories() {
  const { latestInventories, isLoading } = useLatestInventories();
  return (
    <div>
      <Title level={3}>The Latest Repositories</Title>
      <LatestInventoriesTable
        inventories={latestInventories}
        loading={isLoading}
      />
    </div>
  );
}
