import { Table, type TableColumnsType } from "antd";
import Text from "antd/es/typography";
import type { User } from "../../../../../entity/user/model/User";
import { useUsers } from "../../hooks/useUsers";

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
];

export function UsersTable() {
  const { users, isLoading } = useUsers();
  return (
    <Table<User>
      rowKey="id"
      loading={isLoading}
      columns={columns}
      dataSource={users}
      pagination={false}
    />
  );
}
