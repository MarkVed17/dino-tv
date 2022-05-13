import React from "react";
import { useFilter } from "../../contexts";
import "./FilterChip.css";

const FilterChip = ({ filterCategory }) => {
  const { filter, setFilter } = useFilter();

  const filterHandler = (e) => {
    if (filter === e.currentTarget.textContent) {
      setFilter("All");
    } else {
      setFilter(e.currentTarget.textContent);
    }
  };

  return (
    <span
      className={
        filter === filterCategory ? "filter-active-chip" : "filter-chip"
      }
      onClick={filterHandler}
    >
      {filterCategory}
    </span>
  );
};

export { FilterChip };
