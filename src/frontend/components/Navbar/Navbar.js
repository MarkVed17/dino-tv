import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSidebar, useTheme } from "../../contexts";
import "./Navbar.css";

const Navbar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const { pathname } = useLocation();

  const forbiddenPaths = ["/", "/signin", "/signup"];

  const { setShowSidebar } = useSidebar();

  const { theme, toggleTheme } = useTheme();

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
                  <span class="material-icons" title="Switch to Light Mode">
                    light_mode
                  </span>
                ) : (
                  <span class="material-icons" title="Switch to Dark Mode">
                    dark_mode
                  </span>
                )}
              </li>
              <li>
                <span
                  className="header-account-link"
                  onClick={() => setDropDownMenu(!dropDownMenu)}
                >
                  Account
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {dropDownMenu && (
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
      )}
    </>
  );
};

export { Navbar };
