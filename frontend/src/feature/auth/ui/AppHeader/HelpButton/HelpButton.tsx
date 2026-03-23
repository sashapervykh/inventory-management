import { QuestionCircleOutlined } from "@ant-design/icons";
import { useUser } from "../../../../../entity/user/model/useUser";
import { Button, Tooltip } from "antd";

export function HelpButton() {
  const { user } = useUser();

  if (!user) return null;

  const handleClick = () => {
    console.log(user.id);
  };

  return (
    <Tooltip title="Create support ticket" placement="bottom">
      <Button
        type="text"
        shape="circle"
        onClick={handleClick}
        className="w-fit m-[auto_auto_auto_10px]"
      >
        <QuestionCircleOutlined />
      </Button>
    </Tooltip>
  );
}
