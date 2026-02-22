import type { ReactNode } from "react";
import { ThemeProvider } from "../../shared/hooks/useTheme/themeProvider";
import { UserProvider } from "../../entity/user/model/user.provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
}
