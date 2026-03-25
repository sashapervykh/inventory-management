import type { Key } from "react";
import { TooltipButton } from "../../../../shared/ui/TooltipButton/TooltipButtom";
import { useControlsList } from "../../model/hooks/useControlsList";
import { useUser } from "../../../../entity/user/model/useUser";
import { ContactBadge } from "../ContactBadge/ContactBadge";

interface Props {
  selectedInventories: Key[];
}

export function UserInventoriesControls({ selectedInventories }: Props) {
  const { user } = useUser();
  const controlsList = useControlsList({ selectedInventories });
  return (
    <div className="flex w-full space-between align-middle">
      <div className="flex w-fit justify-end gap-2.5">
        {user?.contactId && <ContactBadge />}
        {controlsList.map((buttonData, id) => {
          if (user?.contactId && id === 0) return null;
          return (
            <TooltipButton
              key={buttonData.action}
              tooltip={buttonData.tooltip}
              buttonText={buttonData.buttonText}
              onClick={buttonData.onClick}
            />
          );
        })}
      </div>
    </div>
  );
}
