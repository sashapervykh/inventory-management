import MDEditor from "@uiw/react-md-editor";
import type { UserInventory } from "../../model/UserInventory";

export const userInventoriesColumns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (_: unknown, record: UserInventory) => (
      <MDEditor.Markdown source={record.description} className="bg-inherit!" />
    ),
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
];
