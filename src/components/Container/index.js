import React from "react";
import "./container.css";

function Container(props) {
  const { className } = props;

  return (
    <div className={`container ${className}`}>{props.children}</div>
  );

}

export default Container;