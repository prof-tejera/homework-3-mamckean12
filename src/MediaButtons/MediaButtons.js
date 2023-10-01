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
    <Panel>
      <Button
        active={activeType === "rewind"}
        onClick={() => handleClick("rewind")}
        text="Rewind"
        size="Large"
      />
      <Button
        active={activeType === "fast-forward"}
        onClick={() => handleClick("fast-forward")}
        text="Fast Forward"
        size="Large"
      />
      <Button
        active={activeType === "play"}
        onClick={() => handleClick("play")}
        text="Play"
        size="Large"
      />
      <Button
        active={activeType === "stop"}
        onClick={() => handleClick("stop")}
        text="Stop"
        size="Large"
      />
    </Panel>
  );
};

export default MediaButtons;
