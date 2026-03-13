import { Button, Tooltip } from "antd";
import type { TooltipPlacement } from "antd/es/tooltip";
import type { ReactNode } from "react";

interface Props {
  tooltip: string;
  buttonText: string | ReactNode;
  placement?: TooltipPlacement;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

export function TooltipButton({
  tooltip,
  buttonText,
  onClick,
  placement = "top",
}: Props) {
  return (
    <Tooltip title={tooltip} placement={placement}>
      <Button type="primary" onClick={onClick}>
        {buttonText}
      </Button>
    </Tooltip>
  );
}
