import { createContext } from "react";
import type { ModalContextType } from "../types/ModalContextType";

export const ContactModalContext = createContext<ModalContextType | null>(null);
