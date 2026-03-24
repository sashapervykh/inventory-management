import {
  DeleteOutlined,
  FolderAddOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import type { Key } from "react";
import { useUserInventories } from "./useUserInventories";
import { useContactModal } from "./useContactModal";

interface Props {
  selectedInventories: Key[];
}

export function useControlsList({ selectedInventories }: Props) {
  const navigate = useNavigate();
  const { deleteUserInventories } = useUserInventories();
  const { open } = useContactModal();
  return [
    {
      action: "Create Contact",
      tooltip: "Create Contract",
      buttonText: <UserSwitchOutlined />,
      onClick: () => {
        open();
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
