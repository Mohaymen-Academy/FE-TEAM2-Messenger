import { useCallback } from "react";
import { Editable } from "slate-react";
import DefaultElement from "./DefaultElement";
import Leaf from "./Leaf";

const EditableTextArea = () => {
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <div>
      <Editable
        onContextMenu={(e) => {
          e.preventDefault();
          console.log("context");
        }}
        className="mx-2 px-3 py-2.5 w-full text-base text-gray-900 bg-white ring-1 ring-white dark:ring-gray-800 dark:focus:ring-blue-400 rounded-lg border border-gray-300 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white outline-none resize-none leading-6"
        onChange={(value) => {
          console.log("on editable value change:", value);
        }}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
      />
    </div>
  );
};

export default EditableTextArea;
