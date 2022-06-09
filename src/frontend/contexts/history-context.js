import React, { createContext, useContext, useState, useEffect } from "react";
import {
  addToHistory,
  clearHistory,
  getHistoryService,
  removeFromHistory,
} from "../services";
import { useAuth } from "../contexts";

const HistoryContext = createContext();

const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getHistoryService(auth.token);
      if (response !== undefined) {
        setHistory(response);
      } else {
        setHistory([]);
      }
    })();
  }, [auth]);

  const addToHistoryHandler = async (video) => {
    if (history.find((historyVideo) => historyVideo._id === video._id)) {
      removeFromHistoryHandler(video._id);
    }

    const response = await addToHistory(auth.token, video);
    if (response !== undefined) {
      setHistory(response);
    } else {
      setHistory([]);
    }
  };

  const removeFromHistoryHandler = async (_id) => {
    const response = await removeFromHistory(auth.token, _id);
    if (response !== undefined) {
      setHistory(response);
    } else {
      setHistory([]);
    }
  };

  const clearHistoryHandler = async () => {
    const response = await clearHistory(auth.token);
    if (response !== undefined) {
      setHistory(response);
    } else {
      setHistory([]);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
        addToHistoryHandler,
        removeFromHistoryHandler,
        clearHistoryHandler,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

const useHistory = () => {
  const context = useContext(HistoryContext);

  if (context === undefined) {
    throw new Error("useHistory must be within a HistoryProvider");
  }

  return context;
};

export { HistoryProvider, useHistory };
