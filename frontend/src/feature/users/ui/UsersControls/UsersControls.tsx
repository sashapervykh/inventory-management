import { TooltipButton } from "../../../../../shared/ui/TooltipButton/TooltipButtom";
import { useUserControls } from "./ControlsList";

export function UserControls() {
  const buttons = useUserControls();

  return (
    <div className="flex gap-2.5 justify-end mb-2.5">
      {buttons.map((button) => (
        <TooltipButton key={button.tooltip} {...button} />
      ))}
    </div>
  );
}
