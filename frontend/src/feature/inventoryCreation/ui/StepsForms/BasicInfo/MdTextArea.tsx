import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

interface Props {
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export function MDTextArea({ value, onChange }: Props) {
  return (
    <MDEditor
      value={value}
      onChange={onChange}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
    />
  );
}
