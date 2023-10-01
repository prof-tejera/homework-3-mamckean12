// import { useState } from "react";
import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
// import Button from "components/Button/Button";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <Panel backgroundColor="blue">
      <div>Hello World!</div>
      <div>Another prop</div>
      <div>
        <Input placeholder="Username..."></Input>
      </div>
      <div>
        <Input placeholder="Password..."></Input>
      </div>
    </Panel>
  );
};

export default LoginForm;
