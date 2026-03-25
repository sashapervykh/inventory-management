import { CheckOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

export function ContactBadge() {
  return (
    <div className="flex justify-center h-auto">
      <Tooltip title="Your contact saved!">
        <Button type="primary" disabled>
          <CheckOutlined />
        </Button>
      </Tooltip>
    </div>
  );
}
