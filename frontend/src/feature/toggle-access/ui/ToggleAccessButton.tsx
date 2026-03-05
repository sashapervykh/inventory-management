import { Button } from "antd";
import { useToggleAccess } from "../model/hooks/useToggleAccess";

export function ToggleAccessButton({ isPublic }: { isPublic: boolean }) {
  const { updateInventoryAccess } = useToggleAccess();
  return (
    <Button
      onClick={() => {
        updateInventoryAccess(!isPublic);
      }}
      type="primary"
    >
      {isPublic ? "Limit access" : "Make public"}
    </Button>
  );
}
