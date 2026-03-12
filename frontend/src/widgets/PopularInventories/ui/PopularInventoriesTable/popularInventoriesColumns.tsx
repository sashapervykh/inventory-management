import MDEditor from "@uiw/react-md-editor";
import type { PopularInventory } from "../../model/PopularInventory";

export const popularInventoriesColumns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    render: (_: unknown, record: PopularInventory) => (
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
];
