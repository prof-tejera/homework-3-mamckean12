import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  console.log("active: ", active);
  console.log(btnProps);
  return (
    <button
      className={active ? "Default-button Default-button-active" : "Default-button"}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default Button;
