import { Select, Spin } from "antd";
import { useCategories } from "../../../model/hooks/useCategories";

export function CategorySelect() {
  const { categories } = useCategories();

  return (
    <Select
      loading={!categories}
      options={categories}
      notFoundContent={
        !categories ? (
          <Spin size="small" className="flex justify-self-center" />
        ) : null
      }
      optionRender={(option) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          {option.data.name}
        </div>
      )}
    />
  );
}
