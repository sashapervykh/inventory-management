import { useState } from "react";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { SortableItem } from "./SortableItem";
import { Button, Form, type FormListFieldData } from "antd";

const fields = [
  { id: 1, index: 1 },
  { id: 2, index: 2 },
  { id: 3, index: 3 },
  { id: 4, index: 4 },
  { id: 5, index: 5 },
];

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
            values["custom-id-elements"].find((value, id) => id === elem.id),
          ),
        );
      }}
    >
      <Form.List name="custom-id-elements" initialValue={fields}>
        {(fields, { add }) => {
          return (
            <DragDropProvider
              onDragEnd={(event) => {
                setItems((items) => move(items, event));
              }}
            >
              {fields.map((field, index) => {
                return (
                  <SortableItem
                    key={field.key}
                    name={field.name}
                    index={index}
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
