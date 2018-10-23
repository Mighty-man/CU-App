import React from "react";
import { Route, Redirect } from "react-router-dom";

export  function PrivateRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
}

export  function PublicRoute({
  component: Component,
  authenticated,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === false ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}