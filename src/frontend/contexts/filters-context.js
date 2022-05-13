import React, { useState, createContext, useContext } from "react";
import { useVideos } from "../contexts";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { videos } = useVideos();
  const [filter, setFilter] = useState("All");

  const filterVideos = () => {
    switch (filter) {
      case "Jurassic Park":
        return videos.filter((video) => video.categoryName === "Jurassic Park");
      case "The Lost World":
        return videos.filter((video) => video.categoryName === "The Lost World");
      case "Jurassic Park 3":
        return videos.filter((video) => video.categoryName === "Jurassic Park 3");
      case "Jurassic World":
        return videos.filter((video) => video.categoryName === "Jurassic World");
      case "Fallen Kingdom":
        return videos.filter(
          (video) => video.categoryName === "Fallen Kingdom"
        );
      case "All":
        return videos;
      default:
        return videos;
    }
  };

  const filteredVideos = filterVideos();

  return (
    <FilterContext.Provider value={{ filteredVideos, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error("useFilter must be within a FilterProvider");
  }

  return context;
};

export { FilterProvider, useFilter };
