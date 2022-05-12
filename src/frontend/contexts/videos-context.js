import React, { createContext, useContext, useState, useEffect } from "react";
import { getVideosService } from "../services";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getVideosService();
      if (response !== undefined) {
        setVideos(response);
        console.log(response);
      }
    })();
  }, []);

  return (
    <VideosContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => {
  const context = useContext(VideosContext);

  if (context === undefined) {
    throw new Error("useVideos must be within a VideosProvider");
  }

  return context;
};

export { VideosProvider, useVideos };
