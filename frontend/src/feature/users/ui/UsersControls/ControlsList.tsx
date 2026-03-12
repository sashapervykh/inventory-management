import {
  DeleteOutlined,
  DownOutlined,
  LockOutlined,
  UnlockOutlined,
  UpOutlined,
} from "@ant-design/icons";

export function useUserControls() {
  return [
    {
      buttonText: <LockOutlined />,
      tooltip: "Block",
      onClick: () => console.log("Block"),
    },
    {
      buttonText: <UnlockOutlined />,
      tooltip: "Unblock",
      onClick: () => console.log("Unblock"),
    },
    {
      buttonText: <UpOutlined />,
      tooltip: "Promote to admin",
      onClick: () => console.log("Promote to admin"),
    },
    {
      buttonText: <DownOutlined />,
      tooltip: "Demote to user",
      onClick: () => console.log("Demote to user"),
    },
    {
      buttonText: <DeleteOutlined />,
      tooltip: "Delete",
      onClick: () => console.log("Delete"),
    },
  ];
}
