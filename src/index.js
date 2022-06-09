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
                <WatchLaterVideosProvider>
                  <LikedVideosProvider>
                    <SidebarProvider>
                      <App />
                    </SidebarProvider>
                  </LikedVideosProvider>
                </WatchLaterVideosProvider>
              </HistoryProvider>
            </FilterProvider>
          </VideosProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
