// import this component's css file
import "./Panel.css";

// function to handle panel component rendering requests from higher level components
const Panel = (props) => {
  return (
    // override default background color if that property is passed in (e.g., MediaButtons.js) 
    // also incorporate any properties from panel children components 
    <div className="Default-panel" style={{backgroundColor:props.backgroundColor}}>
      {props.children}
    </div>
  );
};

// export this component so it is available for import in other parts of app
export default Panel;