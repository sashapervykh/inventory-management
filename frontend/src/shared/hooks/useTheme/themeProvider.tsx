import { useState, type ReactNode } from "react";
import { ThemeContext } from "./themeContext";
import { THEMES } from "../../constants/themes";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
