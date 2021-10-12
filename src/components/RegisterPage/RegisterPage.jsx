import React from "react";
import css from "./styles.module.css";
import { Input } from "components/common";
import { Link } from "react-router-dom";

export class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [],
      values: { login: "", password: "" },
      errors: { login: "", password: "" },
    };
  }

  componentDidMount() {
    if (localStorage.getItem("usersArray")) {
      const usersArray = JSON.parse(localStorage.getItem("usersArray"));
      this.setState({
        usersArray,
      });
    }
  }

  handleChange = (e) => {
    const target = e.target;
    this.setState((prevState) => ({
      values: { ...prevState.values, [target.name]: target.value },
      errors: { ...prevState.errors, [target.name]: "" },
    }));
  };

  handleSubmit = (e) => {
    let {
      usersArray,
      values: { login, password },
    } = this.state;

    e.preventDefault();

    if (!login.trim()) {
      this.setState((prevState) => ({
        errors: { ...prevState.erros, login: "введите логин" },
      }));
      return;
    }

    if (!password.trim()) {
      this.setState((prevState) => ({
        errors: { ...prevState.erros, password: "введите пароль" },
      }));
      return;
    }

    if (usersArray.find((user) => user.login === login)) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          login: "упс, такой логин уже есть",
        },
        values: { ...prevState.values, login: "" },
      }));
      return;
    }

    usersArray = usersArray.concat([
      {
        login: login,
        password: password,
      },
    ]);
    localStorage.setItem("usersArray", JSON.stringify(usersArray));
    this.props.onComeToTrello();
  };

  render() {
    const {
      values: { login, password },
      errors: { login: errorLogin, password: errorPass },
    } = this.state;

    return (
      <div className={css.wrapper}>
        <h1>Регистрация</h1>
        <form className={css.userForm} onSubmit={this.handleSubmit}>
          <div>
            <label>Введите логин:</label>
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
            <label>Введите пароль:</label>
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
            Сохранить
          </button>
        </form>
        <button className={css.button} onClick={this.handelClickCancel}>
          <Link className={css.link} to="/login">
            Отмена
          </Link>
        </button>
      </div>
    );
  }
}
