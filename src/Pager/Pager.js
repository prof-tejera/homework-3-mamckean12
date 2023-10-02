// import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./Pager.css";

const Pager = () => {
  return (
    <Panel>
      <Button text="<" size="12px"/>
      <Button text="1" size="12px"/>
      <Button text="2" size="12px"/>
      <Button text="3" size="12px"/>
      <Button text="..." size="12px"/>
      <Button text="5" size="12px"/>
      <Button text=">" size="12px"/>
    </Panel>
  );
};

export default Pager;
