import { createContext } from "react";
import type { UserContextType } from "./UserContextType";

export const UserContext = createContext<UserContextType | null>(null);
