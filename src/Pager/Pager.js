// import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./Pager.css";

const Pager = () => {
  return (
    <Panel>
      <Button text="<" />
      <Button text="1" />
      <Button text="2" />
      <Button text="3" />
      <Button text="..." />
      <Button text="5" />
      <Button text=">" />
    </Panel>
  );
};

export default Pager;
