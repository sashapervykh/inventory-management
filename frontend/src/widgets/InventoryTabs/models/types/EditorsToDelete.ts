import type { Dispatch, Key, SetStateAction } from "react";

export interface EditorsToDelete {
  editorsToDelete: Key[];
  setEditorsToDelete: Dispatch<SetStateAction<Key[]>>;
}
