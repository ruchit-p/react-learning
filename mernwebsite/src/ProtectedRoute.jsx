import React from "react";
import { Route, Navigate } from "react-router";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          if (auth) return <Component {...props} />;
          if (!auth)
            return (
              <Navigate to="/" replace />
            );
        }}
      />
    </div>
  );
};

export default ProtectedRoute;
