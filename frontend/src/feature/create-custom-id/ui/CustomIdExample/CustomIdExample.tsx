import useFormInstance from "antd/es/form/hooks/useFormInstance";
import Title from "antd/es/typography/Title";
import { getCustomIdExample } from "../../lib/getCustomExample";
import { useWatch } from "antd/es/form/Form";

export function CustomIdExample() {
  const form = useFormInstance();
  const idParts = useWatch("id-parts", form);

  if (!idParts) return;

  console.log(idParts);
  const idExample = getCustomIdExample(idParts);
  return (
    <div className="flex gap-2 align-bottom">
      <Title level={5}>Custom Id Example:</Title>
      <span>{idExample}</span>
    </div>
  );
}
