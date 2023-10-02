import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import "./LoginForm.css";

const LoginForm = () => {

  return (
    <Panel>
      <div className="input-wrapper">
        <div>
          <Input 
            placeholder="Enter username"
          >
          </Input>
        </div>
        <div>
          <Input 
            placeholder="Enter password">
          </Input>
        </div>
      </div>
      <div>
        <Input 
          type="checkbox"
          text="Remember me">
        </Input>
      </div>
      <div>
        <Button text="Login"/>
      </div>
      <a href="https://www.w3schools.com/">Forgot Password?</a>    
    </Panel>
  );
};

export default LoginForm;
