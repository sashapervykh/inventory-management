import { HolderOutlined } from "@ant-design/icons";
import { useDroppable } from "@dnd-kit/react";
import { Divider } from "antd";
import { Typography } from "antd";

const { Text } = Typography;

export function DroppableTabHeader() {
  const { isDropTarget, ref } = useDroppable({
    id: "droppable",
  });
  return (
    <div className="flex flex-col w-full h-20" ref={ref}>
      {isDropTarget ? (
        <>Drop element here to remove it.</>
      ) : (
        <>
          <Text>You can define custom id here.</Text>
          <Text>
            You can reorder element by dragging <HolderOutlined />, add element
            by clicking the button or delete them by dropping them here.
          </Text>
          <Divider />
        </>
      )}
    </div>
  );
}
