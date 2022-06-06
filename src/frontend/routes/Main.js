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
  SingleVideoScreen,
} from "../screens";
import Mockman from "mockman-js";
import { PrivateRoute } from "../components";
import { useAuth } from "../contexts";

const Main = () => {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/explore/:videoId" element={<SingleVideoScreen />} />
      <Route
        path="/explore"
        element={
          <PrivateRoute>
            <ExploreScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/search"
        element={
          <PrivateRoute>
            <SearchScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/liked"
        element={
          <PrivateRoute>
            <LikedVideosScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/watchlater"
        element={
          <PrivateRoute>
            <WatchLaterScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/playlist"
        element={
          <PrivateRoute>
            <PlaylistScreen />
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <HistoryScreen />
          </PrivateRoute>
        }
      />
      {!auth.status && (
        <>
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
        </>
      )}
      <Route path="/mockman" element={<Mockman />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export { Main };
