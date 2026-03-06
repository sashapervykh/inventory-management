import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { DeleteEditorsButton } from "../../../../feature/define-editors/ui/DeleteEditorsButton/DeleteEditorButton";
import { AccessAutocomplete } from "../AccessAutocomplete/AccessAutocomplete";
import type { Key } from "react";
import type { EditorsToDelete } from "../../models/types/editorsToDelete";

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
