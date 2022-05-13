import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts";

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();
  return auth.status ? children : <Navigate replace to="/signin" />;
};

export { PrivateRoute };
