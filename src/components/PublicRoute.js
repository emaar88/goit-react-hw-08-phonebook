import React from "react";
import { Route, Redirect } from "react-router-dom";
// import withAuth from "./hoc/withAuth";
// import withRouter from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";

const PublicRoute = ({
  component: Component,
  isAuthenticated, // проверка на ограниченный Роут
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to="/contacts" />
      ) : (
        <Component {...props} />
      )
    }
  />
);
// export default withRouter(withAuth(PublicRoute));

// export default withAuth(PublicRoute);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
