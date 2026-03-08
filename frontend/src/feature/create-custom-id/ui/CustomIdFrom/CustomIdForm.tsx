import { useState } from "react";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { SortableItem } from "./SortableItem";
import { Button, Form } from "antd";

export function CustomIdForm() {
  const fields = Array.from({ length: 5 }, (_, i) => ({
    name: "field" + i,
    key: i,
    id: i,
  }));
  const [items, setItems] = useState(fields);

  return (
    <Form
      onFinish={(values: { "custom-id-elements": [] }) => {
        console.log(
          items.map((elem) =>
            values["custom-id-elements"].find((_value, id) => id === elem.id),
          ),
        );
      }}
    >
      <Form.List name="custom-id-elements" initialValue={fields}>
        {(fields, { add, remove }) => {
          return (
            <DragDropProvider
              onDragEnd={(event) => {
                setItems((items) => move(items, event));
              }}
            >
              {fields
                .filter((field) => items.find((item) => item.id === field.name))
                .map((field, index) => {
                  return (
                    <SortableItem
                      key={field.key}
                      name={field.name}
                      index={index}
                      setItems={setItems}
                      remove={remove}
                    />
                  );
                })}
              <Button
                type="primary"
                onClick={() => {
                  add();
                  setItems((i) => [
                    ...i,
                    {
                      name: "field" + fields.length,
                      key: fields.length,
                      id: fields.length,
                    },
                  ]);
                }}
              >
                Add
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </DragDropProvider>
          );
        }}
      </Form.List>
    </Form>
  );
}
