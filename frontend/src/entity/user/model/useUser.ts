import { useContext } from "react";
import { UserContext } from "./user.context";

export function useUser() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("userContext should be used within userProvider");
  }
  return userContext;
}
