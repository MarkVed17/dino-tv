import React from "react";
import { NavLink } from "react-router-dom";
import "./ShrinkedSidebar.css";

const ShrinkedSidebar = () => {
  const linkStyle = ({ isActive }) =>
    isActive ? "shrinked-sidebar-link active-link" : "shrinked-sidebar-link";

  return (
    <div className="shrinked-sidebar">
      <NavLink to="/" className={linkStyle}>
        <span
          title="Home"
          className="material-icons-outlined shrinked-sidebar-icon"
        >
          home
        </span>
      </NavLink>

      <NavLink to="/search" className={linkStyle}>
        <span
          title="Search"
          className="material-icons-outlined shrinked-sidebar-icon"
        >
          search
        </span>
      </NavLink>

      <NavLink to="/explore" className={linkStyle}>
        <span
          title="Explore"
          className="material-icons-outlined shrinked-sidebar-icon"
        >
          explore
        </span>
      </NavLink>

      <NavLink to="/history" className={linkStyle}>
        <span
          title="History"
          className="material-icons-outlined shrinked-sidebar-icon"
        >
          history
        </span>
      </NavLink>

      <NavLink to="/watchlater" className={linkStyle}>
        <span
          title="Watch Later"
          className="material-icons-outlined shrinked-sidebar-icon"
        >
          watch_later
        </span>
      </NavLink>

      <NavLink to="/liked" className={linkStyle}>
        <span
          title="Liked Videos"
          className="material-icons-outlined shrinked-sidebar-icon"
        >
          thumb_up
        </span>
      </NavLink>

      <NavLink to="/playlist" className={linkStyle}>
        <span
          title="Playlist"
          className="material-icons-outlined shrinked-sidebar-icon"
        >
          playlist_play
        </span>
      </NavLink>
    </div>
  );
};

export { ShrinkedSidebar };
