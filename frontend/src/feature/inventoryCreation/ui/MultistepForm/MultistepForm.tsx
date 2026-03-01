import { Card, Steps } from "antd";
import {
  AppstoreAddOutlined,
  DatabaseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { InventoryForm } from "../InventoryForm/InventoryForm";

export function MultistepForm() {
  return (
    <>
      {" "}
      <Steps
        items={[
          {
            title: "Basic Info",
            status: "finish",
            icon: <DatabaseOutlined />,
          },
          {
            title: "Custom ID",
            status: "wait",
            icon: <InfoCircleOutlined />,
          },

          {
            title: "Additional Fields",
            status: "wait",
            icon: <AppstoreAddOutlined />,
          },
        ]}
      ></Steps>
      <Card>
        <InventoryForm />
      </Card>
    </>
  );
}
