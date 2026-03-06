import { Spin, Table, type TableColumnsType } from "antd";
import Text from "antd/es/typography";
import type { TableRowSelection } from "antd/es/table/interface";
import { useState, type Dispatch, type Key, type SetStateAction } from "react";
import { useEditors } from "../../model/hooks/useEditors";

interface DataType {
  key: React.Key;
  id: string;
  fullName: string;
  email: string;
}
const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
];

export function AccessTable({
  setUsersToDelete,
}: {
  setUsersToDelete: Dispatch<SetStateAction<Key[]>>;
}) {
  const { editors, isLoading } = useEditors();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  if (isLoading) return <Spin />;
  const dataSource = editors.map((editor) => ({ ...editor, key: editor.id }));

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    setUsersToDelete(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<DataType> = {
    type: "checkbox",
    selectedRowKeys,
    onChange: onSelectChange,
  };

  if (editors.length === 0) {
    return (
      <Text>No users are granted write access, except you and admins.</Text>
    );
  }
  return (
    <Table<DataType>
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
    />
  );
}
