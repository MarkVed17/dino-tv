import React from "react";
import { NavLink } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="main-content"
    >
      This is Home Screen
      <NavLink to="/explore">Go to Explore</NavLink>
    </div>
  );
};

export { HomeScreen };
