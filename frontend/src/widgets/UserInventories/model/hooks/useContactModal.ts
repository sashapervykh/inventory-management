import { useContext } from "react";
import { ContactModalContext } from "../contexts/modal.context";

export function useContactModal() {
  const modalContext = useContext(ContactModalContext);
  if (!modalContext) {
    throw new Error(
      "contactModalContext should be used within ContactModalProvider",
    );
  }
  return modalContext;
}
