import MDEditor from "@uiw/react-md-editor";
import type { Inventory } from "../../../../entity/inventory/model/types/Inventory";

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
    render: (_: unknown, record: Inventory) => (
      <MDEditor.Markdown source={record.description} className="bg-inherit!" />
    ),
  },
  {
    title: "Owner",
    dataIndex: "owner",
    key: "owner",
  },
];
