import { Table, type TableColumnsType } from "antd";
import type { Dispatch, Key, SetStateAction } from "react";
import type { TableRowSelection } from "antd/es/table/interface";
import { useUsers } from "../../model/hooks/useUsers";
import type { User } from "../../../../entity/user/model/User";

const columns: TableColumnsType<User> = [
  {
    title: "Name",
    dataIndex: "fullName",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

interface Props {
  selectedUsersKeys: Key[];
  setSelectedUsersKeys: Dispatch<SetStateAction<Key[]>>;
}

export function UsersTable({ selectedUsersKeys, setSelectedUsersKeys }: Props) {
  const { users, isLoading } = useUsers();
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedUsersKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<User> = {
    type: "checkbox",
    selectedRowKeys: selectedUsersKeys,
    onChange: onSelectChange,
  };
  return (
    <Table<User>
      rowKey="id"
      rowSelection={rowSelection}
      loading={isLoading}
      columns={columns}
      dataSource={users}
      pagination={false}
    />
  );
}
