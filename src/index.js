import React from "react";
import ReactDOM from "react-dom";
import { LoginPage } from "components/LoginPage/LoginPage";
import { App } from "./components";

class GlodalComponent extends React.Component {
  state = {
    isActiveApp: false,
    isActiveLoginPage: true,
  };
  handleComeInTrello = () => {
    this.setState({
      isActiveApp: true,
      isActiveLoginPage: false,
    });
  };

  render() {
    const { isActiveApp, isActiveLoginPage } = this.state;
    return (
      <div>
        {isActiveApp && <App />}
        {isActiveLoginPage && (
          <LoginPage onComeInTrello={this.handleComeInTrello} />
        )}
      </div>
    );
  }
}

ReactDOM.render(<GlodalComponent />, document.getElementById("root"));
