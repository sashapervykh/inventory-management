import { Spin, Table, type TableColumnsType } from "antd";
import { useEditingUsers } from "../../../../feature/users/model/hooks/useEditingUsers";
import Text from "antd/es/typography";
import type { TableRowSelection } from "antd/es/table/interface";
import { useState } from "react";
import { useEditors } from "../../../../feature/define-editors/model/hooks/useEditors";

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
  const { editors, isLoading } = useEditors();
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  if (isLoading) return <Spin />;
  const dataSource = editors.map((user) => ({ ...user, key: user.id }));

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
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
      // onChange={onChange}
    />
  );
}
