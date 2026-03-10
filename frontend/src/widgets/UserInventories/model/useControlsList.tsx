import { FolderAddOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export function useControlsList() {
  const navigate = useNavigate();
  return [
    {
      action: "Add",
      tooltip: "Create New Inventory",
      buttonText: <FolderAddOutlined />,
      onClick: () => {
        navigate("/create");
      },
    },
  ];
}
