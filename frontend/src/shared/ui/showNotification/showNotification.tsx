import { notification } from "antd";

export interface Props {
  type?: "success" | "error" | "warning";
  title: string;
  description: string;
}

export function showNotification({ type, title, description }: Props) {
  return notification.open({
    type: type ?? "success",
    title: title,
    description: description,
  });
}
