// import React from "react";
import "./Panel.css";

const Panel = (props) => {
  console.log("props.children: ", props.children);
  return <div className="Default-panel">{props.children}</div>;
};

export default Panel;