import Title from "antd/es/typography/Title";
import { NewInventoryTabs } from "../../widgets/NewInventoryTabs/NewInventoryTabs";
import { Button, Form } from "antd";

export function CreatePage() {
  return (
    <Form
      className="flex flex-col w-[95%] mr-auto ml-auto"
      onFinish={() => {
        console.log("submit");
      }}
    >
      <Title className="flex justify-center">Create Your Inventory</Title>
      <Button type="primary" className="w-fit" htmlType="submit">
        Create
      </Button>
      <NewInventoryTabs />
    </Form>
  );
}
