import useFormInstance from "antd/es/form/hooks/useFormInstance";
import Text from "antd/es/typography";
import { getCustomIdExample } from "../../lib/getCustomExample";
import { useWatch } from "antd/es/form/Form";
import type { CustomIdPart } from "../../model/types/CustomIdPart";

export function CustomIdExample({ items }: { items: CustomIdPart[] }) {
  const form = useFormInstance();
  const idParts = useWatch("id-parts", form);
  if (!idParts) return;
  const filledParts = idParts.filter(Boolean);
  const orderedParts = items.map((elem) =>
    filledParts.find((_, id: number) => id === elem.id),
  );
  const idExample = getCustomIdExample(orderedParts);
  return (
    <div className="flex gap-2 pb-2.5">
      <Text>
        <strong>Custom Id Example:</strong>
      </Text>
      <span>{idExample}</span>
    </div>
  );
}
