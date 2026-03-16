import MDEditor from "@uiw/react-md-editor";
import type { PopularInventory } from "./PopularInventory";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../shared/hooks/useTheme/useTheme";

export const usePopularInventoriesColumns = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return [
    {
      title: t("titleColumn"),
      dataIndex: "title",
      key: "title",
    },
    {
      title: t("descriptionColumn"),
      dataIndex: "description",
      key: "description",
      render: (_: unknown, record: PopularInventory) => (
        <MDEditor.Markdown
          source={record.description}
          className="bg-inherit!"
          style={{ color: theme === "dark" ? "#FFFFFF" : "#000000" }}
        />
      ),
    },
    {
      title: t("ownerNameColumn"),
      dataIndex: "ownerName",
      key: "ownerName",
    },
    {
      title: t("ownerEmailColumn"),
      dataIndex: "ownerEmail",
      key: "ownerEmail",
    },
  ];
};
