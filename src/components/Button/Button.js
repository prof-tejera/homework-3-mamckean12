import "./Button.css";

const Button = ({ active, text, ...btnProps }) => {
  console.log("button, active: ", active);
  console.log("button props: ", btnProps);

  return (
    <button
      className={active ? "Default-button Default-button-active" : "Default-button"}
      {...btnProps}
      style={{fontSize: btnProps.size, color: btnProps.fontcolor}}
    >
      {text}
    </button>
  );
};

export default Button;
