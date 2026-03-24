import { QuestionCircleOutlined } from "@ant-design/icons";
import { useUser } from "../../../../../entity/user/model/useUser";
import { Button, Tooltip } from "antd";
import { useState } from "react";
import { HelpModal } from "./HelpModal";

export function HelpButton() {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (!user) return null;

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Tooltip title="Create support ticket" placement="bottom">
        <Button
          type="text"
          shape="circle"
          onClick={handleClick}
          className="w-fit m-[auto_auto_auto_10px]"
        >
          <QuestionCircleOutlined />
        </Button>{" "}
      </Tooltip>
      <HelpModal isOpen={isOpen} close={handleCancel} user={user} />
    </>
  );
}
