import {
  DeleteOutlined,
  FolderAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useUserInventories } from "./useUserInventories";
import type { Key } from "react";

interface Props {
  selectedInventories: Key[];
}

export function useControlsList({ selectedInventories }: Props) {
  const navigate = useNavigate();
  const { deleteUserInventories } = useUserInventories();
  return [
    {
      action: "Create Contact",
      tooltip: "Create Contract",
      buttonText: <UserSwitchOutlined />,
      onClick: () => {
        navigate("/create");
      },
    },
    {
      action: "Add",
      tooltip: "Create New Inventory",
      buttonText: <FolderAddOutlined />,
      onClick: () => {
        navigate("/create");
      },
    },
    {
      action: "Delete",
      tooltip: "Delete Selected Inventories",
      buttonText: <DeleteOutlined />,
      onClick: () => {
        deleteUserInventories(selectedInventories);
      },
    },
  ];
}
