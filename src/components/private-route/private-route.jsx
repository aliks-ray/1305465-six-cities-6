import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AuthorizationStatus} from "../../consts/consts.js";

const PrivateRoute = ({render, path, exact, page}) => {
  const {authorizationStatus} = useSelector((state) => state.USER);
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return authorizationStatus === AuthorizationStatus.AUTH ? (
          render(routeProps)
        ) : (
          <Redirect to={page} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
};

export default PrivateRoute;
