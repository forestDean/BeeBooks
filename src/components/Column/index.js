import React from "react";

function Column(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  const { className } = props;
  const colClass = `${size} ${className}`
  return <div className={colClass}>{props.children}</div>;
}

export default Column;
