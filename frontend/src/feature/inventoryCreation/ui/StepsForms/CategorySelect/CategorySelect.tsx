import { Select, Spin } from "antd";
import { useCategories } from "../../../model/hooks/useCategories";

interface Props {
  value?: string | undefined;
  onChange?: (value: string | undefined) => void;
}

export function CategorySelect({ value, onChange }: Props) {
  const { categories } = useCategories();

  return (
    <Select
      value={value}
      onChange={onChange}
      loading={!categories}
      options={categories}
      fieldNames={{ value: "name", label: "name" }}
      notFoundContent={
        !categories ? (
          <Spin size="small" className="flex justify-self-center" />
        ) : null
      }
      optionRender={(option) => <div>{option.data.name}</div>}
    />
  );
}
