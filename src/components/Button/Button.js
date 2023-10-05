// import this component's css file
import "./Button.css";

// function to handle button component rendering requests from higher level components
const Button = ({ active, text, ...btnProps }) => {
  // function to handle panel component rendering requests from higher level components
  return (
    // use conditional className to handle button click / active state management
    // also incorporate any properties from button children components
    <button
      className={active ? "Default-button Default-button-active" : "Default-button"}
      {...btnProps}
      style={{fontSize: btnProps.size, color: btnProps.fontcolor}}
    >
      {text}
    </button>
  );
};

// export this component so it is available for import in other parts of app
export default Button;
