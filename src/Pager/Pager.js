import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./Pager.css";

// data object (such as the count of the pages available for display from an API)
const data = { 
    startIcon: "<",
    count: 12,
    endIcon: ">"
};

// convert data array to buttons array
const buttons = [];
console.log("data.count: ", data.count);
for (let i = 0; i < 3; i++) {
  buttons.push({ text: i + 1,}); 
}
buttons.unshift({text: data.startIcon});
buttons.push({text: "..."});
buttons.push({text: data.count});
buttons.push({text: data.endIcon});
console.log("buttons array: ", buttons);

const Pager = () => {
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
            active={activeType === text}
            onClick={() => handleClick(text)}
          >
          </Button>
        )
      })};
    </Panel>
  );
};

export default Pager;
