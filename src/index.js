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
          <Route path="/login">
            {isLogin ? (
              <Redirect to="/trello" />
            ) : (
              <LoginPage onComeToTrello={this.handleComeToTrello} />
            )}
          </Route>
          <Route path="/register">
            {isLogin ? (
              <Redirect to="/trello" />
            ) : (
              <RegisterPage onComeToTrello={this.handleComeToTrello} />
            )}
          </Route>
          <Route path="/trello">
            {isLogin ? (
              <App onExitAccount={this.handleComeToTrello} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Redirect to="/login" />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<GlodalComponent />, document.getElementById("root"));
