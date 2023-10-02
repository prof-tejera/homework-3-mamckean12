import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./RadioButtons.css";

// array of buttons
const buttons = [
  { 
    text: "Apple",
    fontcolor: "red",
  },
  { 
    text: "Pear",
    fontcolor: "green",
  },
  { 
    text: "Orange",
    fontcolor: "orange",
  },
];
  
const RadioButtons = () => {
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
      {buttons.map(({ text, fontcolor }) => {
        console.log("buttons.map text: ", text);
        return (
          <Button
            key={text}
            text={text}
            fontcolor={fontcolor}
            active={activeType === text}
            onClick={() => handleClick(text)}
          >
          </Button>
        )
      })};
    </Panel>
  );
};

export default RadioButtons;
