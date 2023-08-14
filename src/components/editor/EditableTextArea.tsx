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
