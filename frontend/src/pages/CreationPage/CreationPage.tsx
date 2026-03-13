import Title from "antd/es/typography/Title";
import { MultistepForm } from "../../feature/create-inventory/ui/MultistepForm/MultistepForm";

export function CreationPage() {
  return (
    <div className="flex flex-col w-[95%] mr-auto ml-auto">
      <Title className="flex justify-center">Create Your Inventory</Title>
      <MultistepForm />
    </div>
  );
}
