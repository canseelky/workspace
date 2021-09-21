import ReCAPTCHA from "react-google-recaptcha";
import classes from "./RegisterForm.module.css";

const ReCAPTCHA_API_KEY = "6Le6T50bAAAAAK91ywCsBD7b2P5PySQPhJFJR0C9";

const RegisterForm = () => {
  const registerHandler = () => {};
  function onChange(value) {}
  return (
    <div className={classes.main}>
      <form onSubmit={registerHandler}>
        <input
          className={classes.inputfield}
          type="email"
          placeholder="Email Address"
        />
        <input
          className={classes.inputfield}
          type="text"
          placeholder="Username"
        />
        <input
          className={classes.inputfield}
          type="password"
          placeholder="Password"
        />
        <ReCAPTCHA
          className={classes.recaptcha}
          sitekey={ReCAPTCHA_API_KEY}
          onChange={onChange}
        />
        <button className={classes.btn_register} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
