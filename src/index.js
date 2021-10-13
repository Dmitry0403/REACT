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
}

class GlodalComponent extends React.Component {
  state = {
    isLogin: false,
  };

  handleComeToTrello = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
    }));
  };

  render() {
    const { isLogin } = this.state;
    return (
      <Router>
        <Switch>
          <Route path={LINKS.log}>
            {isLogin ? (
              <Redirect to={LINKS.trello} />
            ) : (
              <LoginPage onComeToTrello={this.handleComeToTrello} />
            )}
          </Route>
          <Route path={LINKS.reg}>
            {isLogin ? (
              <Redirect to={LINKS.trello} />
            ) : (
              <RegisterPage onComeToTrello={this.handleComeToTrello} />
            )}
          </Route>
          <Route path={LINKS.trello}>
            {isLogin ? (
              <App onExitAccount={this.handleComeToTrello} />
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
