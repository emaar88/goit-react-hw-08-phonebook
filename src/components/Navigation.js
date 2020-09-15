import React from "react";
import { NavLink } from "react-router-dom";
// import routes from "../routes";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";
// import "./Navigation.scss";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#E84A5F",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/tasks"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Tasks
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
