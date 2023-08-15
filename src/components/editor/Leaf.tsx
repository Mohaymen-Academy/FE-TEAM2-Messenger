const Leaf = (props) => {
  console.log(props.leaf.spoiler);
  return (
    <span
      className={props.leaf.spoiler && "spoiler"}
      {...props.attributes}
      style={{
        fontWeight: props.leaf.bold ? "bold" : "normal",
        fontStyle: props.leaf.italic ? "italic" : "normal",
        textDecoration: props.leaf.underline ? "underline" : "normal",
      }}
    >
      {props.children}
    </span>
  );
};

export default Leaf;
