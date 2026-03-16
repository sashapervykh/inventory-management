import Title from "antd/es/typography/Title";
import { useLatestInventories } from "../model/useLatestInventories";
import { LatestInventoriesTable } from "./LatestInventoriesTable/LatestInventoriesTable";
import { useTranslation } from "react-i18next";

export function LatestInventories() {
  const { latestInventories, isLoading } = useLatestInventories();
  const { t } = useTranslation();
  return (
    <div>
      <Title level={3}>{t("latestTitle")}</Title>
      <LatestInventoriesTable
        inventories={latestInventories}
        loading={isLoading}
      />
    </div>
  );
}
