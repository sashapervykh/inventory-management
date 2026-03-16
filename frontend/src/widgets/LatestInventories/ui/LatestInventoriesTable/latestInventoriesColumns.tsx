import MDEditor from "@uiw/react-md-editor";
import { Typography } from "antd";
import type { LatestInventory } from "../../model/LatestInventory";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../../shared/hooks/useTheme/useTheme";

const { Text } = Typography;
export const useLatestInventoriesColumns = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

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
      render: (_: unknown, record: LatestInventory) => (
        <MDEditor.Markdown
          source={record.description}
          className={`bg-inherit!`}
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
    {
      title: t("timeColumn"),
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_: unknown, record: LatestInventory) => (
        <Text className="bg-inherit!">
          {new Date(record.createdAt).toLocaleTimeString()},{" "}
          {new Date(record.createdAt).toLocaleDateString()}
        </Text>
      ),
    },
  ];
};
