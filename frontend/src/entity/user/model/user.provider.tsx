import { useState } from "react";
import type { User } from "./User";
import { UserContext } from "./user.context";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const value = { user, setUser };
  return <UserContext value={value}>{children}</UserContext>;
}
