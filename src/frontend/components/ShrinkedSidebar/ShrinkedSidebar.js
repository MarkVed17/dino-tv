import React from "react";
import { NavLink } from "react-router-dom";
import { usePlaylists } from "../../contexts";
import "./ShrinkedSidebar.css";

const ShrinkedSidebar = () => {
  const linkStyle = ({ isActive }) =>
    isActive ? "shrinked-sidebar-link active-link" : "shrinked-sidebar-link";
  const { playlists } = usePlaylists();

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

      {playlists.map((playlist) => (
        <NavLink
          to={`/playlists/${playlist._id}`}
          className={linkStyle}
          key={playlist._id}
        >
          <span
            title={playlist.title}
            className="material-icons-outlined shrinked-sidebar-icon"
          >
            playlist_play
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export { ShrinkedSidebar };
