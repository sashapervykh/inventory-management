import Title from "antd/es/typography/Title";
import { useUserInventories } from "../model/usePopularInventories";
import { PopularInventoriesTable } from "./PopularInventoriesTable/PopularInventoriesTable";
import { useTranslation } from "react-i18next";

export function PopularInventories() {
  const { popularInventories, isLoading } = useUserInventories();
  const { t } = useTranslation();
  return (
    <div>
      <Title level={3}>{t("popularTitle")}</Title>
      <PopularInventoriesTable
        inventories={popularInventories}
        loading={isLoading}
      />
    </div>
  );
}
