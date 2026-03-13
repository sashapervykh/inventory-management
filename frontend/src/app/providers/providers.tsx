import type { ReactNode } from "react";
import { ThemeProvider } from "../../shared/hooks/useTheme/themeProvider";
import { UserProvider } from "../../entity/user/model/user.provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../shared/lib/tanstack/queryClient";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserProvider>{children}</UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
