import { TooltipButton } from "../../../../shared/ui/TooltipButton/TooltipButtom";
import { useControlsList } from "../../model/useControlsList";

export function UserInventoriesControls() {
  const controlsList = useControlsList();
  return (
    <div className="flex w-full justify-end">
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
