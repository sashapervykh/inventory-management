import { getFrontendName } from "../../../shared/utils/getFrontendName.js";
import type { BackendEditors } from "../types/BackendEditingUsers.js";

export function getFrontendEditors(editors: BackendEditors) {
  return editors.map((editor) => {
    const { fullName } = getFrontendName(
      editor.user.firstName,
      editor.user.lastName,
    );
    return {
      id: editor.user.id,
      email: editor.user.email,
      fullName,
    };
  });
}
