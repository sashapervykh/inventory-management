import type { Dispatch, Key, SetStateAction } from "react";
import {
  DeleteOutlined,
  DownOutlined,
  LockOutlined,
  UnlockOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useUsers } from "../../model/hooks/useUsers";
import type { UseMutateFunction } from "@tanstack/react-query";
import type { StatusUpdateDto } from "../../model/types/StatusUpdateDto";

interface Props {
  selectedUsersKeys: Key[];
  setSelectedUsersKeys: Dispatch<SetStateAction<Key[]>>;
}

export function useUserControls({
  selectedUsersKeys,
  setSelectedUsersKeys,
}: Props) {
  const { updateUsersStatus, updateUsersType } = useUsers();
  const clearListAfterAction = (action: () => void) => () => {
    action();
    setSelectedUsersKeys([]);
  };

  return [
    {
      buttonText: <LockOutlined />,
      tooltip: "Block",
      onClick: clearListAfterAction(() =>
        updateUsersStatus({ userIds: selectedUsersKeys, isBlocked: true }),
      ),
    },
    {
      buttonText: <UnlockOutlined />,
      tooltip: "Unblock",
      onClick: clearListAfterAction(() =>
        updateUsersStatus({ userIds: selectedUsersKeys, isBlocked: false }),
      ),
    },
    {
      buttonText: <UpOutlined />,
      tooltip: "Promote to admin",
      onClick: clearListAfterAction(() =>
        updateUsersType({ userIds: selectedUsersKeys, userType: "admin" }),
      ),
    },
    {
      buttonText: <DownOutlined />,
      tooltip: "Demote to user",
      onClick: clearListAfterAction(() =>
        updateUsersType({ userIds: selectedUsersKeys, userType: "user" }),
      ),
    },
    {
      buttonText: <DeleteOutlined />,
      tooltip: "Delete",
      onClick: () => console.log("Delete"),
    },
  ];
}
