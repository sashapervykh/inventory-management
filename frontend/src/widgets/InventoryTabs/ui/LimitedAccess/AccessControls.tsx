import { DeleteEditorsButton } from "../../../../entity/editors/ui/DeleteEditorsButton/DeleteEditorButton";
import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import type { EditorsToDelete } from "../../../../entity/editors/model/types/EditorsToDelete";
import { AccessAutocomplete } from "../AccessAutocomplete/AccessAutocomplete";

export function AccessControls({
  editorsToDelete,
  setEditorsToDelete,
}: EditorsToDelete) {
  return (
    <div className="flex gap-2">
      <AccessAutocomplete />
      <DeleteEditorsButton
        editorsToDelete={editorsToDelete}
        setEditorsToDelete={setEditorsToDelete}
      />
      <ToggleAccessButton isPublic={false} />
    </div>
  );
}
