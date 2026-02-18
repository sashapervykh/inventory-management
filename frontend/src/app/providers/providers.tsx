import type { ReactNode } from "react";
import { ThemeProvider } from "../../shared/hooks/useTheme/themeProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
