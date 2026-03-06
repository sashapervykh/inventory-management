import { ToggleAccessButton } from "../../../../feature/toggle-access/ui/ToggleAccessButton";
import { DeleteEditorsButton } from "../../../../feature/define-editors/ui/DeleteEditorsButton/DeleteEditorButton";
import { AccessAutocomplete } from "../AccessAutocomplete/AccessAutocomplete";
import type { Key } from "react";

export function AccessControls({ usersToDelete }: { usersToDelete: Key[] }) {
  return (
    <div className="flex gap-2">
      <AccessAutocomplete />
      <DeleteEditorsButton usersToDelete={usersToDelete} />
      <ToggleAccessButton isPublic={false} />
    </div>
  );
}
