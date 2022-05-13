import React from "react";
import { useFilter } from "../../contexts";
import { ExploreScreenCard, FilterChip } from "../../components";
import "./ExploreScreen.css";

const ExploreScreen = () => {
  const { filteredVideos } = useFilter();
  const filterCategories = [
    "All",
    "Jurassic Park",
    "The Lost World",
    "Jurassic Park 3",
    "Jurassic World",
    "Fallen Kingdom",
  ];

  return (
    <div className="main-content">
      <div className="explore-screen-content">
        <div className="filters-container">
          {filterCategories.map((category) => (
            <FilterChip key={category} filterCategory={category} />
          ))}
        </div>
        <div className="explore-videos-container">
          {filteredVideos.map((video) => (
            <ExploreScreenCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { ExploreScreen };
