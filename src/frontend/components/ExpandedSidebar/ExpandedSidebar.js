import React from "react";
import { NavLink } from "react-router-dom";
import "./ExpandedSidebar.css";

const ExpandedSidebar = () => {
  return (
    <div className="expanded-sidebar">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
      >
        <span className="material-icons-outlined expanded-sidebar-icon">
          home
        </span>
        <span className="sidebar-link-text">Home</span>
      </NavLink>

      <NavLink
        to="/search"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
      >
        <span className="material-icons-outlined expanded-sidebar-icon">
          search
        </span>
        <span className="sidebar-link-text">Search</span>
      </NavLink>

      <NavLink
        to="/explore"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
      >
        <span
          title="Explore"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          explore
        </span>
        <span className="sidebar-link-text">Explore</span>
      </NavLink>

      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
      >
        <span
          title="History"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          history
        </span>
        <span className="sidebar-link-text">History</span>
      </NavLink>

      <NavLink
        to="/watchlater"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
      >
        <span
          title="Watch Later"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          watch_later
        </span>
        <span className="sidebar-link-text">Watch Later</span>
      </NavLink>

      <NavLink
        to="/liked"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
      >
        <span
          title="Liked Videos"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          thumb_up
        </span>
        <span className="sidebar-link-text">Liked Videos</span>
      </NavLink>

      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          isActive
            ? "expanded-sidebar-link active-link"
            : "expanded-sidebar-link"
        }
      >
        <span
          title="Playlist"
          className="material-icons-outlined expanded-sidebar-icon"
        >
          playlist_play
        </span>
        <span className="sidebar-link-text">Playlists</span>
      </NavLink>
    </div>
  );
};

export { ExpandedSidebar };
