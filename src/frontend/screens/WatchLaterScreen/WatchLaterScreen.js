import React from "react";
import { useWatchLaterVideos } from "../../contexts";
import "./WatchLaterScreen.css";
import { WatchLaterVideoCard } from "../../components";

const WatchLaterScreen = () => {
  const { watchLaterVideos } = useWatchLaterVideos();

  return (
    <div className="main-content">
      {watchLaterVideos.length ? (
        <div className="watch-later-videos-content">
          <div className="watch-later-video-banner">
            <img
              src={`https://img.youtube.com/vi/${
                watchLaterVideos[watchLaterVideos.length - 1]._id
              }/maxresdefault.jpg`}
              alt="Watch Later Video Banner"
              className="watch-later-video-banner-img"
            />
            <div className="watch-later-videos-banner-label">
              <span className="material-icons watch-later-videos-banner-icon">
                watch_later
              </span>
              <div className="watch-later-videos-banner-text">Watch Later Videos</div>
            </div>
          </div>

          <div className="watch-later-videos-list">
            {watchLaterVideos
              .map((video) => <WatchLaterVideoCard key={video._id} video={video} />)
              .reverse()}
          </div>
        </div>
      ) : (
        <div className="placeholder">No Watch Later videos</div>
      )}
    </div>
  );
};

export { WatchLaterScreen };
