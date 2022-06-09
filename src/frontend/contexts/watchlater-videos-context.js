import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getWatchLaterVideos,
  addToWatchLaterVideos,
  removeFromWatchLaterVideos,
} from "../services";
import { useAuth } from "../contexts";

const WatchLaterVideosContext = createContext();

const WatchLaterVideosProvider = ({ children }) => {
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getWatchLaterVideos(auth.token);
      if (response !== undefined) {
        setWatchLaterVideos(response);
      } else {
        setWatchLaterVideos([]);
      }
    })();
  }, [auth]);

  const addToWatchLaterHandler = async (video) => {
    const response = await addToWatchLaterVideos(auth.token, video);
    if (response !== undefined) {
      setWatchLaterVideos(response);
    } else {
      setWatchLaterVideos([]);
    }
  };

  const removeFromWatchLaterHandler = async (_id) => {
    const response = await removeFromWatchLaterVideos(auth.token, _id);
    if (response !== undefined) {
      setWatchLaterVideos(response);
    } else {
      setWatchLaterVideos([]);
    }
  };

  return (
    <WatchLaterVideosContext.Provider
      value={{
        watchLaterVideos,
        setWatchLaterVideos,
        addToWatchLaterHandler,
        removeFromWatchLaterHandler,
      }}
    >
      {children}
    </WatchLaterVideosContext.Provider>
  );
};

const useWatchLaterVideos = () => {
  const context = useContext(WatchLaterVideosContext);

  if (context === undefined) {
    throw new Error(
      "useWatchLaterVideos must be within a WatchLaterVideosProvider"
    );
  }

  return context;
};

export { WatchLaterVideosProvider, useWatchLaterVideos };
