import classes from "./LoginForm.module.css";
import { Redirect } from "react-router-dom";
import Reset from "../pages/Reset";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const loginHandler = () => {};

  const redirectToReset = () => {
    <Redirect to="/reset">
      <Reset />
    </Redirect>;
  };

  return (
    <div className={classes.main}>
      <form className={classes.loginForm} onSubmit={loginHandler}>
        <input
          className={classes.loginInput}
          type="email"
          placeholder="Email Address"
        ></input>
        <input
          className={classes.loginInput}
          type="password"
          placeholder="Password"
        ></input>
        <button className={classes.loginButton} type="submit">
          Login
        </button>
      </form>

      <Link to="/forgot">Forgot your password?</Link>
    </div>
  );
};

export default LoginForm;
