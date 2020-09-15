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

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Регистрация
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Авторизация
    </NavLink>
  </div>
);

export default AuthNav;
