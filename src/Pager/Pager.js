// import the react functions, components, and css used in the code below 
import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./Pager.css";

// simulation of pager data object (e.g., a count of the pages available for display from an API)
const data = { 
    startIcon: "<",
    count: 12,
    endIcon: ">"
};

// convert pager data object to a buttons array for use by buttons component
const buttons = [];
// create the first three numbered buttons (the rest will be represented as an ellipsis)
for (let i = 0; i < 3; i++) {
  buttons.push({ text: i + 1,}); 
}
// place start icon at start of buttons array
buttons.unshift({text: data.startIcon});
// add an ellipsis after the first three buttons
buttons.push({text: "..."});
// add a button with number equal to total page count
buttons.push({text: data.count});
// add end icon
buttons.push({text: data.endIcon});

// function to create pager buttons based on created buttons array
const Pager = () => {
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
  // improvement note: same .map code used in radio buttons component - consider a utility file with such things
  return (
  // render panel component to frame the rendered buttons below
    <Panel>
      {buttons.map(({ text, fontcolor }) => {
        return (
        // render buttons using button component with these properties passed to that component
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

// export this component so it is available for import in other parts of app
export default Pager;
