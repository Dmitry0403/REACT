import React from "react";
import css from "./styles.module.css";
import { Input } from "components/common/Input";

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { login: "", password: "" },
      errors: { login: "", password: "" },
    };
  }

  handleChange = (e) => {
    const target = e.target;
    this.setState((prevState) => ({
      values: { ...prevState.values, [target.name]: target.value },
    }));
  };

  handleSubmit = (e) => {
    const userLogin = process.env.REACT_APP_USER_LOGIN;
    const userPass = process.env.REACT_APP_USER_PASSWORD;
    const login = this.state.values.login;
    const password = this.state.values.password;
    if (login === userLogin && password === userPass) {
      this.props.onComeInTrello();
      e.preventDefault();
      return;
    }
    if (login !== userLogin) {
      this.setState((prevState) => ({
        values: { ...prevState.values, login: "введите правильный логин" },
      }));
    }
    if (password !== userPass) {
      this.setState((prevState) => ({
        values: { ...prevState.values, password: "введите правильный пароль" },
      }));
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className={css.wrapper}>
        <h1>Введите логин и пароль</h1>
        <form className={css.userForm} onSubmit={this.handleSubmit}>
          <div>
            <label>Ваш логин:</label>
            <p>
              <Input
                type="text"
                value={this.state.values.login}
                name="login"
                classInput={css.userName}
                onChange={this.handleChange}
              />
            </p>
          </div>
          <div>
            <label>Ваш пароль:</label>
            <p>
              <Input
                type="text"
                value={this.state.values.password}
                name="password"
                classInput={css.userPass}
                onChange={this.handleChange}
              />
            </p>
          </div>
          <div>
            <button type="submit" name="submit" className={css.button}>
              Войти
            </button>
          </div>
        </form>
      </div>
    );
  }
}
