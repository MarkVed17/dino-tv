import React from "react";
import { NavLink } from "react-router-dom";
import { usePlaylists } from "../../contexts";
import "./ExpandedSidebar.css";

const ExpandedSidebar = () => {
  const linkStyle = ({ isActive }) =>
    isActive ? "expanded-sidebar-link active-link" : "expanded-sidebar-link";
  const { playlists } = usePlaylists();

  return (
    <div className="expanded-sidebar">
      <NavLink to="/" className={linkStyle}>
        <span className="material-icons-outlined expanded-sidebar-icon">
          home
        </span>
        <span className="sidebar-link-text">Home</span>
      </NavLink>

      <NavLink to="/explore" className={linkStyle}>
        <span
          title="Explore"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          explore
        </span>
        <span className="sidebar-link-text">Explore</span>
      </NavLink>

      <NavLink to="/history" className={linkStyle}>
        <span
          title="History"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          history
        </span>
        <span className="sidebar-link-text">History</span>
      </NavLink>

      <NavLink to="/watchlater" className={linkStyle}>
        <span
          title="Watch Later"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          watch_later
        </span>
        <span className="sidebar-link-text">Watch Later</span>
      </NavLink>

      <NavLink to="/liked" className={linkStyle}>
        <span
          title="Liked Videos"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          thumb_up
        </span>
        <span className="sidebar-link-text">Liked Videos</span>
      </NavLink>

      {playlists.map((playlist) => (
        <NavLink
          to={`/playlists/${playlist._id}`}
          className={linkStyle}
          key={playlist._id}
        >
          <span
            title={playlist.title}
            className="material-icons-outlined expanded-sidebar-icon"
          >
            playlist_play
          </span>
          <span className="sidebar-link-text">{playlist.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export { ExpandedSidebar };
