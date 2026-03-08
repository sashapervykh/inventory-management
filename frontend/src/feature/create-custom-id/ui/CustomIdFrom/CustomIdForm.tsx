import { useRef, useState } from "react";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { SortableItem } from "./SortableItem";
import { Button, Form } from "antd";
import { Droppable } from "./Droppable";

export function CustomIdForm() {
  const fields = Array.from({ length: 5 }, (_, i) => ({
    name: "field" + i,
    key: i,
    id: i,
  }));
  const [items, setItems] = useState(fields);
  const counter = useRef(items.length - 1);

  return (
    <>
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
          {(_) => {
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
                {items.map((field, index) => {
                  return (
                    <SortableItem
                      key={field.key}
                      name={field.id}
                      index={index}
                      setItems={setItems}
                    />
                  );
                })}
                <Button
                  type="primary"
                  onClick={() => {
                    counter.current += 1;
                    setItems((i) => [
                      ...i,
                      {
                        name: "field" + counter.current,
                        key: counter.current,
                        id: counter.current,
                      },
                    ]);
                  }}
                >
                  Add
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Droppable />
              </DragDropProvider>
            );
          }}
        </Form.List>
      </Form>
    </>
  );
}
