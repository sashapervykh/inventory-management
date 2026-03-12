import MDEditor from "@uiw/react-md-editor";
import { Typography } from "antd";
import type { LatestInventory } from "../../model/LatestInventory";

const { Text } = Typography;
export const latestInventoriesColumns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (_: unknown, record: LatestInventory) => (
      <MDEditor.Markdown source={record.description} className="bg-inherit!" />
    ),
  },
  {
    title: "Owner Name",
    dataIndex: "ownerName",
    key: "ownerName",
  },
  {
    title: "Owner Email",
    dataIndex: "ownerEmail",
    key: "ownerEmail",
  },
  {
    title: "Created At",
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
