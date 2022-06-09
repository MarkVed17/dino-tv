import React from "react";
import { useVideos } from "../../contexts";
import { RecommendedVideoCard } from "../../components";
import "./RecommendedVideosList.css";

const RecommendedVideosList = () => {
  const { videos } = useVideos();

  return (
    <div className="recommended-videos-list">
      <h2 className="recommended-videos-list-heading">Recommended Videos</h2>
      {videos.map((video) => (
        <RecommendedVideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export { RecommendedVideosList };
