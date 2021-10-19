import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { LoginPage } from "components/LoginPage";
import { RegisterPage } from "components/RegisterPage";
import { App } from "./components";

export const LINKS = {
  reg: "/register",
  log: "/login",
  trello: "/trello",
};

class GlodalComponent extends React.Component {
  state = {
    isLogin: false,
    login: "",
  };

  handleComeToTrello = (login) => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
      login,
    }));
  };

  render() {
    const { isLogin, login } = this.state;
    return (
      <Router>
        <Switch>
          <Route path={LINKS.log}>
            {isLogin ? (
              <Redirect to={LINKS.trello + `/:` + login} />
            ) : (
              <LoginPage onComeToTrello={this.handleComeToTrello} />
            )}
          </Route>
          <Route path={LINKS.reg}>
            {isLogin ? (
              <Redirect to={LINKS.trello + `/:` + login} />
            ) : (
              <RegisterPage onComeToTrello={this.handleComeToTrello} />
            )}
          </Route>
          <Route path={LINKS.trello + `/:` + login}>
            {isLogin ? (
              <App onExitAccount={this.handleComeToTrello} login={login} />
            ) : (
              <Redirect to={LINKS.log} />
            )}
          </Route>
          <Redirect to={LINKS.log} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<GlodalComponent />, document.getElementById("root"));
