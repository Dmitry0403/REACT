import React from "react";
import css from "./styles.module.css";
import { Input } from "components/common";

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
    e.preventDefault();
    if (login === userLogin && password === userPass) {
      this.props.onComeToTrello();
      return;
    }
    if (login !== userLogin) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, login: "ошибка" },
        values: { ...prevState.values, login: "" },
      }));
    }

    if (password !== userPass) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, password: "ошибка" },
        values: { ...prevState.values, password: "" },
      }));
    }
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
            <div>
              <Input
                type="text"
                value={login}
                name="login"
                className={css.userName}
                onChange={this.handleChange}
                errorMessage={errorLogin}
                errorText={"неверный логин"}
              />
            </div>
          </div>
          <div>
            <label>Ваш пароль:</label>
            <div>
              <Input
                type="text"
                value={password}
                name="password"
                className={css.userPass}
                onChange={this.handleChange}
                errorMessage={errorPass}
                errorText={"неверный пароль"}
              />
            </div>
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
