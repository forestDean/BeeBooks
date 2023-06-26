import React from "react";

function Row(props) {
  const { className } = props;
  return <div className={`row ${className}`}>{props.children}</div>;

}

export default Row;
