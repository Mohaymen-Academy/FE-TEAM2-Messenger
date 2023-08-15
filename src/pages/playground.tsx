import Editor from "@/components/editor";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

const playground = () => {
  return (
    <div>
      <Editor initialValue={initialValue}>
        <div className="">
          <Editor.ToolsBar />
        </div>
        <Editor.Input />
      </Editor>
    </div>
  );
};

export default playground;