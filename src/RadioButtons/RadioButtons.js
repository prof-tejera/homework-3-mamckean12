import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./RadioButtons.css";

const RadioButtons = () => {
  return (
    <Panel>
      <Button text="Apple" color="red" fontcolor="white"/>
      <Button text="Pear" color="green" fontcolor="white"/>
      <Button text="Orange" color="orange" fontcolor="white"/>
    </Panel>
  );
};

export default RadioButtons;
