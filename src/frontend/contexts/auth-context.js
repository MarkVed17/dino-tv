import { useState, createContext, useContext } from "react";
import { AUTH_TOKEN, USERNAME } from "../constants/authConstants";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    status: localStorage.getItem(AUTH_TOKEN) ? true : false,
    token: localStorage.getItem(AUTH_TOKEN),
    userName: localStorage.getItem(USERNAME),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
