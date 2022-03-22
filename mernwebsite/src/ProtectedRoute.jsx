import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ auth, children }) => {
  if(!auth) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;
