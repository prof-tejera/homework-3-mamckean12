// import the react functions, components, and css used in the code below 
import Panel from "components/Panel/Panel";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import "./LoginForm.css";

// function to create login form
const LoginForm = () => {

  // components to render in browser
  return (
    // render panel component to frame the rendered form
    <Panel>
      <div className="input-wrapper">
        <div>
          {/* render username input box with placeholder text */}
          <Input 
            placeholder="Enter username"
          >
          </Input>
        </div>
        <div>
          {/* render password input box with placeholder text */}
          <Input 
            placeholder="Enter password">
          </Input>
        </div>
      </div>
      <div>
        {/* render remember me checkbox */}
        <Input 
          type="checkbox"
          text="Remember me">
        </Input>
      </div>
      <div>
        {/* render login button */}
        <Button text="Login"/>
      </div>
      {/* simulate a forget password link */}
      <a href="https://www.w3schools.com/">Forgot Password?</a>    
    </Panel>
  );
};

// export this component so it is available for import in other parts of app
export default LoginForm;
