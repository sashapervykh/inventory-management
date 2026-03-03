import { Select, Spin } from "antd";
import { useCategories } from "../../../model/hooks/useCategories";
import { useTags } from "../../../model/hooks/useTags";

interface Props {
  value?: string | undefined;
  onChange?: (value: string | undefined) => void;
}

export function TagsSelect({ value, onChange }: Props) {
  const { tags, loading } = useTags();
  return (
    <Select
      mode="tags"
      value={value}
      fieldNames={{ value: "name", label: "name" }}
      notFoundContent={
        loading && <Spin size="small" className="flex justify-self-center" />
      }
      onChange={onChange}
      options={tags}
      optionRender={(option) => <div>{option.data.name}</div>}
    />
  );
}
