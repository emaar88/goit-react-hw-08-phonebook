import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations, authSelectors } from "../redux/auth";
import Button from "react-bootstrap/Button";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Регистрация</h1>

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={this.handleChange}
            />
          </label>
          <Button type="submit">Зарегистрироваться</Button>
        </form>
      </div>
    );
  }
}

export default connect(null, { onRegister: authOperations.register })(
  RegisterView
);
