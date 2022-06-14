import React from "react";
import { NavLink } from "react-router-dom";
import { DinosaursBanner } from "../../components";
import "./HomeScreen.css"

const HomeScreen = () => {
  return (
    <div className="main-content">
      <div className="hero">
        <p className="hero-tagline">An Adventure Millions Of Years In The Making</p>
        <DinosaursBanner />
        <NavLink to="/explore" className="hero-button">Explore</NavLink>
      </div>
    </div>
  );
};

export { HomeScreen };
