import React, { useState, useEffect } from "react";
import {
  RecommendedVideosList,
  SingleVideoDetails,
  VideoPlayer,
} from "../../components";
import { useParams } from "react-router-dom";
import { getVideoByIdService } from "../../services";
import "./SingleVideoScreen.css";

const SingleVideoScreen = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState();

  useEffect(() => {
    (async () => {
      const response = await getVideoByIdService(videoId);
      if (response !== undefined) {
        setVideo(response);
      }
    })();
  }, [videoId]);

  return (
    <div className="main-content">
      <div className="single-video-screen-content">
        {video && (
          <div>
            <VideoPlayer videoId={videoId} />
            <SingleVideoDetails video={video} />
          </div>
        )}
        <RecommendedVideosList />
      </div>
    </div>
  );
};

export { SingleVideoScreen };
