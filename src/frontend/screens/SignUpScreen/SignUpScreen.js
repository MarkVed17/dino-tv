import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, USERNAME } from "../../constants/authConstants";
import { useAuth } from "../../contexts";
import { signUpService } from "../../services/auth-services/signUpService";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const signUpHandler = async (user) => {
    const res = await signUpService(user);
    const { createdUser, encodedToken } = res;
    if (encodedToken !== undefined) {
      localStorage.setItem(AUTH_TOKEN, encodedToken);
      localStorage.setItem(USERNAME, createdUser.firstName);
      setAuth((auth) => ({
        ...auth,
        status: true,
        token: encodedToken,
        userName: createdUser.firstName,
      }));
    }
    navigate("/");
  };

  return (
    <form
      className="signup-form"
      onSubmit={(e) => {
        e.preventDefault();
        signUpHandler(user);
      }}
    >
      {/* Sign-up Form */}
      <div className="signup-input-container">
        <h2 className="signup-heading">Create New Account</h2>

        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          placeholder="John"
          name="fname"
          className="input standard large"
          required
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />

        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          placeholder="Doe"
          name="lname"
          className="input standard large"
          required
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />

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
          type="password"
          placeholder="Password"
          name="psw"
          className="input standard large"
          minLength="8"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <label htmlFor="check-psw">Confirm Password</label>
        <input
          type="password"
          placeholder="Password"
          name="check-psw"
          className="input standard large"
          required
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
        />
        <small className="password-status">
          {user.password !== "" &&
          user.confirmPassword !== "" &&
          user.password !== user.confirmPassword
            ? "Passwords don't match!"
            : ""}
        </small>

        <button
          type="submit"
          className={
            user.password !== "" &&
            user.confirmPassword !== "" &&
            user.password === user.confirmPassword
              ? "btn btn-brand btn-accent btn-signup"
              : "btn btn-brand btn-accent btn-signup btn-disabled"
          }
          disabled={user.password !== user.confirmPassword}
        >
          <b>Sign up</b>
        </button>

        <Link to="/signin" className="signin-link">
          Existing account? Sign In
          <span className="material-icons arrow">arrow_right_alt</span>
        </Link>
      </div>
    </form>
  );
};

export { SignUpScreen };
