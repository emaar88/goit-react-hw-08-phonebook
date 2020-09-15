import React, { Component, Suspense } from "react";
// import { uuid } from "uuidv4";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Layout from "./Layout";
import routes from "../routes";
import { authOperations } from "../redux/auth";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute key={route.label} {...route} />
                )
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default connect(null, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
