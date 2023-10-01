// import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./Pager.css";

const Pager = () => {
  return (
    <Panel>
      <Button text="<" size="Small"/>
      <Button text="1" size="Small"/>
      <Button text="2" size="Small"/>
      <Button text="3" size="Small"/>
      <Button text="..." size="Small"/>
      <Button text="5" size="Small"/>
      <Button text=">" size="Small"/>
    </Panel>
  );
};

export default Pager;
