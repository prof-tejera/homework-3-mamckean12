// import the react functions, components, and css used in the code below 
import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./RadioButtons.css";

// simulation of an array of buttons passed into this component
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

// function to create radio buttons based on an array of button text and font colors
const RadioButtons = () => {

  // track state of button clicks for each button
  const [activeType, setActiveType] = useState(null);

  // function to handle button state on button click
  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    }
  };

  // items to render in browser, using .map on the button array
  return (
    // render panel component to frame the rendered buttons below
    <Panel>
      {buttons.map(({ text, fontcolor }) => {
        console.log("buttons.map text: ", text);
        return (
          // render buttons using button component with these properties passed to that component
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

// export this component so it is available for import in other parts of app
export default RadioButtons;
