import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, USERNAME } from "../../constants/authConstants";
import { useAuth } from "../../contexts";
import { signInService } from "../../services";
import "./SignInScreen.css";

const SignInScreen = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [passwordToggle, setPasswordToggle] = useState(false);

  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const signInHandler = async (user) => {
    const res = await signInService(user);
    const { encodedToken, foundUser } = res;
    if (encodedToken !== undefined) {
      localStorage.setItem(AUTH_TOKEN, encodedToken);
      localStorage.setItem(USERNAME, foundUser.firstName);
      setAuth((auth) => ({
        ...auth,
        status: true,
        token: encodedToken,
        userName: foundUser.firstName,
      }));
      navigate("/");
    }
  };

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        signInHandler(user);
      }}
    >
      {/* Login Form */}
      <div className="login-input-container">
        <h2 className="login-heading">Welcome Back!</h2>
        <h2 className="login-subheading">Please login to continue</h2>

        <label htmlFor="email">Email address</label>
        <input
          type="text"
          placeholder="xyz@example.com"
          name="email"
          className="input standard large"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label htmlFor="psw">Password</label>
        <input
          type={passwordToggle ? "text" : "password"}
          placeholder="Password"
          name="psw"
          className="input standard large"
          minLength="8"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <span
          className="material-icons visibility-icon"
          title={passwordToggle ? "hide password" : "show password"}
          onClick={() => setPasswordToggle(!passwordToggle)}
        >
          {passwordToggle ? "visibility" : "visibility_off"}
        </span>

        <div className="login-form-link">
          <label>
            <input type="checkbox" name="remember" />
            Remember me
          </label>
          <Link to="/signin">Forgot Password?</Link>
        </div>

        <button type="submit" className="btn btn-brand btn-accent btn-login">
          <b>Sign in</b>
        </button>

        <span
          className="guest-link"
          onClick={(e) => {
            e.preventDefault();
            signInHandler({
              email: "adarshbalika@gmail.com",
              password: "adarshBalika123",
            });
          }}
        >
          Sign In as a Guest
        </span>

        <Link to="/signup" className="signup-link">
          Create New Account
          <span className="material-icons arrow">arrow_right_alt</span>
        </Link>
      </div>
    </form>
  );
};

export { SignInScreen };
