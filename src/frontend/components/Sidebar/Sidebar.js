import React from "react";
import { useSidebar } from "../../contexts";
import { ShrinkedSidebar, ExpandedSidebar } from "../../components";
import "./Sidebar.css";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar } = useSidebar();
  const forbiddenPaths = ["/", "/signin", "/signup"];

  const { pathname } = useLocation();

  return (
    !forbiddenPaths.includes(pathname) &&
    (showSidebar ? (
      <div className="sidebar">
        <ShrinkedSidebar />
      </div>
    ) : (
      <div className="sidebar">
        <ExpandedSidebar />
      </div>
    ))
  );
};

export { Sidebar };
