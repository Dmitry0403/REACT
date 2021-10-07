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
      errors: { ...prevState.errors, [target.name]: "" },
    }));
  };

  handleSubmit = (e) => {
    const userLogin = process.env.REACT_APP_USER_LOGIN;
    const userPass = process.env.REACT_APP_USER_PASSWORD;
    const {
      values: { login, password },
    } = this.state;

    if (login === userLogin && password === userPass) {
      this.props.onComeInTrello();
      e.preventDefault();
      return;
    }
    if (login !== userLogin) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, login: "ошибка" },
      }));
    }

    if (password !== userPass) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, password: "ошибка" },
      }));
    }
    e.preventDefault();
  };

  render() {
    const {
      values: { login, password },
      errors: { login: errorLogin, password: errorPass },
    } = this.state;

    return (
      <div className={css.wrapper}>
        <h1>Введите логин и пароль</h1>
        <form className={css.userForm} onSubmit={this.handleSubmit}>
          <div>
            <label>Ваш логин:</label>
            <p>
              <Input
                type="text"
                value={login}
                name="login"
                classInput={css.userName}
                onChange={this.handleChange}
                errorMessage={errorLogin}
                errorText={"неверный логин"}
              />
            </p>
          </div>
          <div>
            <label>Ваш пароль:</label>
            <p>
              <Input
                type="password"
                value={password}
                name="password"
                classInput={css.userPass}
                onChange={this.handleChange}
                errorMessage={errorPass}
                errorText={"неверный пароль"}
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
