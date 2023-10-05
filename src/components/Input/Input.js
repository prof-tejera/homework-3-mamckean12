// import this component's css file
import "./Input.css";

// function to handle input component rendering requests from higher level components
const Input = ({ active, ...inputProps }) => {
  console.log("input active: ", active);
  console.log("input props: ", inputProps);
  return (
    <>
      {/* use conditional className to handle button click / active state management 
        also incorporate any properties from input children components  */}
      <input 
        className={active ? "Default-input Default-input-active" : "Default-input"}
        {...inputProps} />
      <label>{inputProps.text}</label>
    </>
  );
};

// export this component so it is available for import in other parts of app
export default Input;
