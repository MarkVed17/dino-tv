import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomeScreen,
  ExploreScreen,
  SearchScreen,
  LikedVideosScreen,
  WatchLaterScreen,
  PlaylistScreen,
  HistoryScreen,
  SignInScreen,
  SignUpScreen,
} from "../screens";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/explore" element={<ExploreScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/liked" element={<LikedVideosScreen />} />
      <Route path="/watchlater" element={<WatchLaterScreen />} />
      <Route path="/playlist" element={<PlaylistScreen />} />
      <Route path="/history" element={<HistoryScreen />} />
      <Route path="/signin" element={<SignInScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export { Main };
