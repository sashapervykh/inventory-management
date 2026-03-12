import type { Dispatch, Key, SetStateAction } from "react";
import { TooltipButton } from "../../../../shared/ui/TooltipButton/TooltipButtom";
import { useUserControls } from "./ControlsList";

interface Props {
  selectedUsersKeys: Key[];
  setSelectedUsersKeys: Dispatch<SetStateAction<Key[]>>;
}

export function UserControls({
  selectedUsersKeys,
  setSelectedUsersKeys,
}: Props) {
  const buttons = useUserControls({
    selectedUsersKeys,
    setSelectedUsersKeys,
  });

  return (
    <div className="flex gap-2.5 justify-end mb-2.5">
      {buttons.map((button) => (
        <TooltipButton key={button.tooltip} {...button} />
      ))}
    </div>
  );
}
