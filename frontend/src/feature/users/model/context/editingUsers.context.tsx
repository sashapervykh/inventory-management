import { createContext } from "react";
import type { EditingUsersContextType } from "../types/EditingUsersContextType";

export const EditingUsersContext = createContext<
  EditingUsersContextType | undefined
>(undefined);
