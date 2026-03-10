import type { Editors } from "../../../entity/editors/model/types/Editors";

export function getAccessOptions(editors: Editors) {
  return editors.map((editor) => ({
    id: editor.id,
    value: `${editor.fullName}, email: ${editor.email}`,
    label: `${editor.fullName}, email: ${editor.email}`,
  }));
}
