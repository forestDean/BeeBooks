import React from "react";

function Column(props) {
  const size = props.size.split(" ").map(size => "col-" + size).join(" ");
  const { className } = props;
  // if className has no value return just column size
  const colClass = className ? `${size} ${className}` : `${size}`;

  return <div className={colClass}>{props.children}</div>;
}

export default Column;
