import { useRef, useState } from "react";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { Button, Form } from "antd";
import { DroppableTabHeader } from "../DroppableTabHeader/DroppableTabHeader";
import { SortableItems } from "../SortableItems/SortableItems";
import { INITIAL_ITEMS } from "../../constants/initialParts";
import { ID_PARTS_TYPES } from "../../constants/idPartsTypes";
import { useForm } from "antd/es/form/Form";
import { CustomIdExample } from "../CustomIdExample/CustomIdExample";
import { useCustomIdParts } from "../../model/hooks/useCustomIdParts";
import type { CustomIdPartsDto } from "../../model/types/IdPartDto";
import { customIdPartsSchema } from "../../schemas/customIdPartsSchema";

export function CustomIdForm() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const { updateCustomIdParts } = useCustomIdParts();
  const [form] = useForm();
  const counter = useRef(items.length - 1);

  return (
    <>
      <Form
        form={form}
        onFinish={(values: { "id-parts": CustomIdPartsDto }) => {
          const customIdParts = items
            .map((elem) =>
              values["id-parts"].find((_value, id) => id === elem.id),
            )
            .filter(Boolean);
          const typedCustomIdParts = customIdPartsSchema.parse(customIdParts);
          updateCustomIdParts(typedCustomIdParts);
        }}
      >
        <Form.List name="id-parts" initialValue={INITIAL_ITEMS}>
          {() => {
            return (
              <DragDropProvider
                onDragEnd={(event) => {
                  const { target } = event.operation;
                  if (target?.id !== "droppable") {
                    setItems((items) => move(items, event));
                  } else {
                    const { source } = event.operation;
                    setItems((items) =>
                      items.filter((item) => item.id !== source?.id),
                    );
                  }
                }}
              >
                <DroppableTabHeader />
                <CustomIdExample items={items} />
                <SortableItems items={items} />
                <Button
                  type="primary"
                  onClick={() => {
                    counter.current += 1;
                    setItems((i) => [
                      ...i,
                      {
                        name: counter.current,
                        key: counter.current,
                        id: counter.current,
                        type: ID_PARTS_TYPES.FIXED,
                      },
                    ]);
                  }}
                >
                  Add
                </Button>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </DragDropProvider>
            );
          }}
        </Form.List>
      </Form>
    </>
  );
}
