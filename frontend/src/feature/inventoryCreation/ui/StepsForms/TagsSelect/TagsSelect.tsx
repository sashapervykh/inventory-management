import { Select, Spin } from "antd";
import { useTags } from "../../../model/hooks/useTags";

interface Props {
  value?: string[] | undefined;
  onChange?: (value: string[] | undefined) => void;
}

export function TagsSelect({ value, onChange }: Props) {
  const { tags, loading, handleInputChange } = useTags();
  return (
    <Select
      mode="tags"
      value={value}
      fieldNames={{ value: "name", label: "name" }}
      notFoundContent={
        loading && <Spin size="small" className="flex justify-self-center" />
      }
      onChange={onChange}
      onKeyUp={(e) => {
        const input = e.target as HTMLInputElement;
        handleInputChange(input.value);
      }}
      options={tags}
      optionRender={(option) => <div>{option.data.name}</div>}
    />
  );
}
