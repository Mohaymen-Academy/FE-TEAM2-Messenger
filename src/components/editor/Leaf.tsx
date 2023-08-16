import { merge } from "@/utils/merge";

const Leaf = (props: any) => {
  if (props.leaf.emoji) {
    return (
      <span className="emoji" {...props.attributes}>
        {props.children}
      </span>
    );
  }

  return (
    <span
      className={merge(
        { spoiler: props.leaf.spoiler },
        { "font-bold": props.leaf.bold },
        { italic: props.leaf.italic },
        { underline: props.leaf.underline },
        { "line-through": props.leaf.strike }
      )}
      {...props.attributes}
    >
      {props.children}
    </span>
  );
};

export default Leaf;
