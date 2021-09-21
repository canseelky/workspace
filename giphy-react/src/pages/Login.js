import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";
import classes from "./Login.module.css";
import animated from "../static/be-animated.gif";

const Login = () => {
  const loginHandler = () => {};
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const loginToggleHandler = () => {
    setToggleSignUp(false);
    setToggleLogin(!toggleLogin);
  };

  const signUpToggleHandler = () => {
    setToggleLogin(false);
    setToggleSignUp(!toggleSignUp);
  };

  return (
    <div className={classes.main}>
      <div className={classes.leftContainer}>
        <div>
          <img className={classes.loginLogo} src={animated}></img>
        </div>
        <div>
          <div className={classes.btnContainer}>
            <p
              onClick={loginToggleHandler}
              className={`${classes.toggleBTn}
                ${toggleLogin ? classes.selectedOperation : null}`}
            >
              Log In
            </p>
            <p onClick={signUpToggleHandler} className={classes.toggleBTn}>
              Sign Up
            </p>
          </div>

          {toggleLogin ? <LoginForm /> : null}
          {toggleSignUp ? <RegisterForm /> : null}
        </div>
      </div>

      <div className={classes.rightContainer}>
        <img
          className={classes.defaultGif}
          src="https://media3.giphy.com/media/3o85xzUrA3Gj3QbWZa/giphy.gif"
        ></img>
      </div>
    </div>
  );
};

export default Login;
