import { useLocalStorage } from "@uidotdev/usehooks";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isLoggedIn] = useLocalStorage("is_logged_in", false);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
