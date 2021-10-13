import React from "react";
import css from "./styles.module.css";
import { Input } from "components/common";
import { Link } from "react-router-dom";
import { LINKS } from "index";

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
    e.preventDefault();
    let usersArray = [];
    if (localStorage.getItem("usersArray")) {
      usersArray = JSON.parse(localStorage.getItem("usersArray"));
    }

    const {
      values: { login, password },
    } = this.state;

    const user = usersArray.find((user) => user.login === login);

    if (!user) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, login: "неверный логин" },
        values: { ...prevState.values, login: "" },
      }));
      return;
    }

    if (password !== user.password) {
      this.setState((prevState) => ({
        errors: { ...prevState.errors, password: "неверный пароль" },
        values: { ...prevState.values, password: "" },
      }));
      return;
    }
    this.props.onComeToTrello();
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
              />
            </div>
          </div>
          <div>
            <label>Ваш пароль:</label>
            <div>
              <Input
                type="password"
                value={password}
                name="password"
                className={css.userPass}
                onChange={this.handleChange}
                errorMessage={errorPass}
              />
            </div>
          </div>
          <button type="submit" className={css.button}>
            Войти
          </button>
        </form>
        <div className={css.linkBtn}>
          <Link to={LINKS.reg}>
            <button className={css.button}>Регистрация</button>
          </Link>
        </div>
      </div>
    );
  }
}
