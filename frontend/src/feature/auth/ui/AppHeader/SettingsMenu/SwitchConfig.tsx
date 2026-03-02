import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

export function SwitchConfig({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Switch: {
            colorText: "#1677ff",
            colorTextTertiary: "#1677ff",
            colorPrimaryHover: "#1677ff",
            colorTextQuaternary: "#1677ff",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
