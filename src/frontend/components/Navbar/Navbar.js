import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AUTH_TOKEN, USERNAME } from "../../constants/authConstants";
import { useAuth } from "../../contexts";
import { useSidebar, useTheme } from "../../contexts";
import "./Navbar.css";

const Navbar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const { pathname } = useLocation();
  const forbiddenPaths = ["/", "/signin", "/signup"];
  const { setShowSidebar } = useSidebar();
  const { theme, toggleTheme } = useTheme();
  const { auth, setAuth } = useAuth();

  const signOutHandler = () => {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(USERNAME);
    setAuth((auth) => ({
      ...auth,
      status: false,
      token: null,
      userName: null,
    }));
  };

  return (
    <>
      <header className="header-nav nav-search nav-menu">
        {!forbiddenPaths.includes(pathname) && (
          <button
            className="btn nav-menu-btn"
            onClick={() => setShowSidebar((showSidebar) => !showSidebar)}
          >
            <span className="material-icons nav-menu-icon"> menu </span>
          </button>
        )}
        <NavLink to="/" className="header-logo-link">
          <img
            className="header-logo-img"
            src={
              theme === "dark"
                ? "/assets/Logo/dino-tv-logo-dark.svg"
                : "/assets/Logo/dino-tv-logo-light.svg"
            }
            alt="dino-tv-logo"
          />
        </NavLink>

        {!forbiddenPaths.includes(pathname) && (
          <div className="std-search">
            <input
              type="text"
              placeholder="Search..."
              className="input standard nav-searchbar"
            />
            <button className="btn btn-brand btn-accent search-btn nav-searchbar-btn">
              <span className="material-icons nav-search-icon"> search </span>
            </button>
          </div>
        )}

        <div className="header-nav-links">
          <nav>
            <ul>
              <li className="header-account-link" onClick={toggleTheme}>
                {theme === "dark" ? (
                  <span className="material-icons" title="Switch to Light Mode">
                    light_mode
                  </span>
                ) : (
                  <span className="material-icons" title="Switch to Dark Mode">
                    dark_mode
                  </span>
                )}
              </li>
              <li>
                <span
                  className="header-account-link"
                  onClick={() => setDropDownMenu(!dropDownMenu)}
                >
                  {auth.userName ? `Hi, ${auth.userName}` : "Account"}
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {dropDownMenu &&
        (!auth.status ? (
          <div className="dropDown">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={() => setDropDownMenu(!dropDownMenu)}
            >
              Sign-In
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={() => setDropDownMenu(!dropDownMenu)}
            >
              Sign-Up
            </NavLink>
          </div>
        ) : (
          <div className="dropDown">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "header-link-active" : "header-link"
              }
              onClick={signOutHandler}
            >
              Logout
            </NavLink>
          </div>
        ))}
    </>
  );
};

export { Navbar };
