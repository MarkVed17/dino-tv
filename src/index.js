import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  SidebarProvider,
  ThemeProvider,
  AuthProvider,
  VideosProvider,
  FilterProvider,
  LikedVideosProvider,
  WatchLaterVideosProvider,
  HistoryProvider,
  PlaylistProvider,
} from "./frontend/contexts";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <VideosProvider>
            <FilterProvider>
              <HistoryProvider>
                <PlaylistProvider>
                  <WatchLaterVideosProvider>
                    <LikedVideosProvider>
                      <SidebarProvider>
                        <App />
                      </SidebarProvider>
                    </LikedVideosProvider>
                  </WatchLaterVideosProvider>
                </PlaylistProvider>
              </HistoryProvider>
            </FilterProvider>
          </VideosProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
