// this component provided by professor/TA as an example - no modifications made
import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./MediaButtons.css";

const MediaButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  };

  return (
    <Panel backgroundColor="blue">
      <Button
        active={activeType === "rewind"}
        onClick={() => handleClick("rewind")}
        text="Rewind"
        size="18px"
      />
      <Button
        active={activeType === "fast-forward"}
        onClick={() => handleClick("fast-forward")}
        text="Fast Forward"
        size="18px"
      />
      <Button
        active={activeType === "play"}
        onClick={() => handleClick("play")}
        text="Play"
        size="18px"
      />
      <Button
        active={activeType === "stop"}
        onClick={() => handleClick("stop")}
        text="Stop"
        size="18px"
      />
    </Panel>
  );
};

export default MediaButtons;
