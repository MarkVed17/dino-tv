import React from "react";
import { useHistory } from "../../contexts";
import "./HistoryScreen.css";
import { HistoryVideoCard } from "../../components";

const HistoryScreen = () => {
  const { history, clearHistoryHandler } = useHistory();

  return (
    <div className="main-content">
      {history.length ? (
        <div className="history-videos-content">
          <div className="history-video-banner">
            <img
              src={`https://img.youtube.com/vi/${
                history[history.length - 1]._id
              }/maxresdefault.jpg`}
              alt="history Video Banner"
              className="history-video-banner-img"
            />
            <div className="history-videos-banner-label">
              <span className="material-icons history-videos-banner-icon">
                history
              </span>
              <div className="history-videos-banner-text">History Videos</div>
            </div>
            <button
              className="btn btn-brand btn-accent clear-history-btn"
              onClick={() => clearHistoryHandler()}
            >
              Clear All
            </button>
          </div>

          <div className="history-videos-list">
            {history
              .map((video) => (
                <HistoryVideoCard key={video._id} video={video} />
              ))
              .reverse()}
          </div>
        </div>
      ) : (
        <div className="placeholder">
          <h1>Nothing here!</h1>
          <h3>Watch any video to see something...</h3>
        </div>
      )}
    </div>
  );
};

export { HistoryScreen };
