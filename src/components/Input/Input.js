import "./Input.css";

const Input = ({ active, ...inputProps }) => {
  console.log("input active: ", active);
  console.log("input props: ", inputProps);
  return (
    <>
      <input 
        className={active ? "Default-input Default-input-active" : "Default-input"}
        {...inputProps} />
      <label>{inputProps.text}</label>
    </>
  );
};

export default Input;
