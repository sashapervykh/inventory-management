import MDEditor from "@uiw/react-md-editor";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/";
import { Tag } from "antd";

interface Props {
  title: string;
  description: string;
  category: string;
  tags: string[] | undefined;
}

export function SettingsTab({ title, description, category, tags }: Props) {
  return (
    <div className="grid grid-cols-[100px_auto]">
      <span>
        <strong>Title:</strong>
      </span>
      <Title level={5}>{title}</Title>
      <span>
        <strong>Description:</strong>
      </span>
      <MDEditor.Markdown source={description} />
      <span>
        <strong>Category:</strong>
      </span>
      <Text>{category}</Text>
      <span>
        <strong>Tags:</strong>
      </span>
      <div>
        {tags ? (
          <>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </>
        ) : (
          "No tags provided"
        )}
      </div>
    </div>
  );
}
