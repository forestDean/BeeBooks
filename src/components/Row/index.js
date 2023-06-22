import React from "react";

function Row(props,{className}) {

  return <div className={`row ${className}`}>{props.children}</div>;

}

export default Row;
