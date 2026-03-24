import { useState } from "react";
import { ContactModalContext } from "../contexts/modal.context";

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const value = { isOpen, open, close };
  return <ContactModalContext value={value}>{children}</ContactModalContext>;
}
