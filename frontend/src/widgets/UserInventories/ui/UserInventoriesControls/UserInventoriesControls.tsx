import type { Key } from "react";
import { TooltipButton } from "../../../../shared/ui/TooltipButton/TooltipButtom";
import { useControlsList } from "../../model/useControlsList";

interface Props {
  selectedInventories: Key[];
}

export function UserInventoriesControls({ selectedInventories }: Props) {
  const controlsList = useControlsList({ selectedInventories });
  return (
    <div className="flex w-full justify-end gap-2.5">
      {controlsList.map((buttonData) => (
        <TooltipButton
          key={buttonData.action}
          tooltip={buttonData.tooltip}
          buttonText={buttonData.buttonText}
          onClick={buttonData.onClick}
        />
      ))}
    </div>
  );
}
