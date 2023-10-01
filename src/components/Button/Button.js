import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  console.log("button, active: ", active);
  console.log("button props: ", btnProps);

  return (
    <button
      className={active ? "Default-button-active Default-button"  : "Default-button"}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default Button;
