import React from "react";
import { connect } from "react-redux";
import { authSelectors, authOperations } from "../redux/auth";
import Button from "react-bootstrap/Button";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, email, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {email}</span>
    <Button type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  name: authSelectors.getUserName(state),
  email: authSelectors.getUserEmail(state),
  avatar:
    "https://avatars3.githubusercontent.com/u/54318155?s=460&u=a7afe8757ccb766548376349fc1a483ff883dd21&v=4",
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu
);
