import { Select, Spin } from "antd";
import { useCategories } from "../../../model/hooks/useCategories";

interface Props {
  value?: string | undefined;
  onChange?: (value: string | undefined) => void;
}

export function TagsSelect({ value, onChange }: Props) {
  const { categories } = useCategories();
  return (
    <Select
      mode="tags"
      value={value}
      fieldNames={{ value: "name", label: "name" }}
      notFoundContent={
        !categories ? (
          <Spin size="small" className="flex justify-self-center" />
        ) : null
      }
      onChange={onChange}
      options={categories}
      optionRender={(option) => <div>{option.data.name}</div>}
    />
  );
}
