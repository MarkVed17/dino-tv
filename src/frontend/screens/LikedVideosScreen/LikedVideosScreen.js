import React from "react";
import { useLikedVideos } from "../../contexts";
import "./LikedVideosScreen.css";
import { LikedVideoCard } from "../../components";

const LikedVideosScreen = () => {
  const { likedVideos } = useLikedVideos();

  return (
    <div className="main-content">
      {likedVideos.length ? (
        <div className="liked-videos-content">
          <div className="liked-video-banner">
            <img
              src={`https://img.youtube.com/vi/${
                likedVideos[likedVideos.length - 1]._id
              }/maxresdefault.jpg`}
              alt="Liked Video Banner"
              className="liked-video-banner-img"
            />
            <div className="liked-videos-banner-label">
              <span className="material-icons liked-videos-banner-icon">thumb_up</span>
              <div className="liked-videos-banner-text">Liked Videos</div>
            </div>
          </div>

          <div className="liked-videos-list">
            {likedVideos
              .map((video) => <LikedVideoCard key={video._id} video={video} />)
              .reverse()}
          </div>
        </div>
      ) : (
        <div className="placeholder">No Liked videos</div>
      )}
    </div>
  );
};

export { LikedVideosScreen };
