import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getLikedVideosService,
  addToLikedVideos,
  removeFromLikedVideos,
} from "../services";
import { useAuth } from "../contexts";

const LikedVideosContext = createContext();

const LikedVideosProvider = ({ children }) => {
  const [likedVideos, setLikedVideos] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getLikedVideosService(auth.token);
      if (response !== undefined) {
        setLikedVideos(response);
      }
    })();
  }, [auth]);

  const likeVideoHandler = async (video) => {
    const response = await addToLikedVideos(auth.token, video);
    if (response !== undefined) {
      setLikedVideos(response);
    } else {
      setLikedVideos([]);
    }
  };

  const unlikeVideoHandler = async (_id) => {
    const response = await removeFromLikedVideos(auth.token, _id);
    if (response !== undefined) {
      setLikedVideos(response);
    } else {
      setLikedVideos([]);
    }
  };

  return (
    <LikedVideosContext.Provider
      value={{
        likedVideos,
        setLikedVideos,
        likeVideoHandler,
        unlikeVideoHandler,
      }}
    >
      {children}
    </LikedVideosContext.Provider>
  );
};

const useLikedVideos = () => {
  const context = useContext(LikedVideosContext);

  if (context === undefined) {
    throw new Error("useLikedVideos must be within a LikedVideosProvider");
  }

  return context;
};

export { LikedVideosProvider, useLikedVideos };
