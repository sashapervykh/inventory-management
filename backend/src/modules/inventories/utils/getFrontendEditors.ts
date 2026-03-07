import { getFrontendName } from "../../../shared/utils/getFrontendName.js";
import type { BackendEditors } from "../type/BackendEditingUsers.js";

export function getFrontendEditors(editors: BackendEditors) {
  return editors.map((editor) => {
    const { fullName } = getFrontendName(
      editor.user.first_name,
      editor.user.last_name,
    );
    return {
      id: editor.user.id,
      email: editor.user.email,
      fullName,
    };
  });
}
