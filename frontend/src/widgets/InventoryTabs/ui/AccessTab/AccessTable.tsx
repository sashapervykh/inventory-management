import { Table, type TableColumnsType } from "antd";
import { useEditingUsers } from "../../../../feature/users/model/hooks/useEditingUsers";
import Text from "antd/es/typography";
import type { TableRowSelection } from "antd/es/table/interface";
import { useState } from "react";

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

export function AccessTable() {
  const { editingUsers } = useEditingUsers();
  console.log(editingUsers);
  const dataSource = editingUsers.map((user) => ({ ...user, key: user.id }));
  console.log(dataSource);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<DataType> = {
    type: "checkbox",
    selectedRowKeys,
    onChange: onSelectChange,
  };

  if (editingUsers.length === 0) {
    return (
      <Text>No users are granted write access, except you and admins.</Text>
    );
  }
  return (
    <Table<DataType>
      rowSelection={rowSelection}
      columns={columns}
      dataSource={dataSource}
      // onChange={onChange}
    />
  );
}
