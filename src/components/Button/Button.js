import "./Button.css";

const Button = ({ active, text, size, ...btnProps }) => {
  console.log("button, active: ", active);
  console.log("button props: ", btnProps);
  console.log("button size: ", size);

  const activeStyle = "Default-button-active Default-button " + size;
  const inactiveStyle = "Default-button " + size;
  console.log("activeStyle: ", activeStyle);
  console.log("inactiveStyle: ", inactiveStyle);

  return (
    <button
      className={active ? activeStyle  : inactiveStyle }
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default Button;
