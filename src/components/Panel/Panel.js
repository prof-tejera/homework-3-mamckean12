// import React from "react";
import "./Panel.css";

const Panel = (props) => {
  console.log("panel props: ", props);
  console.log("panel props.children: ", props.children);
  return (
    <div className="Default-panel" style={{backgroundColor:props.backgroundColor}}>
      {props.children}
    </div>
  );
};

export default Panel;