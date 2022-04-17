import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [dropDownMenu, setDropDownMenu] = useState(false);

  const location = useLocation();

  return (
    <>
      <header className="header-nav nav-search nav-menu">
        {location.pathname !== "/" && (
          <button class="btn nav-menu-btn">
            <span class="material-icons nav-menu-icon"> menu </span>
          </button>
        )}
        <NavLink to="/" className="header-logo-link">
          <img
            className="header-logo-img"
            src="/assets/Logo/dino-tv-logo.svg"
            alt="dino-tv-logo"
          />
        </NavLink>

        {location.pathname !== "/" && (
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
}

export { Navbar };
