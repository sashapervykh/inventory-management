import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { DeleteEditorsButton } from "../../../../feature/define-editors/ui/DeleteEditorsButton/DeleteEditorButton";
import { AccessAutocomplete } from "../AccessAutocomplete/AccessAutocomplete";

export function AccessControls() {
  return (
    <div className="flex gap-2">
      <AccessAutocomplete />
      <DeleteEditorsButton />
      <ToggleAccessButton isPublic={false} />
    </div>
  );
}
