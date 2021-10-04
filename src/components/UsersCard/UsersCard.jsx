import React from "react";
import css from "./styles.module.css";
import { User } from "./User";
import { UserCardInfo } from "./UserCardInfo";
import { Button } from "components/common/Button";
import { PortModal } from "../PortModal/PortModal";

async function GetDataFromServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

export class UsersCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: {},
      isActivePortModal: false,
    };
  }

  componentDidMount() {
    GetDataFromServer().then((data) => {
      const users = data;
      this.setState({
        users,
      });
    });
  }

  handleClickUser = (user) => {
    this.setState({
      isActivePortModal: true,
      currentUser: user,
    });
  };

  render() {
    const { users, currentUser, isActivePortModal } = this.state;
    return (
      <div class={css.overlay}>
        <div className={css.user}>
          <div className={css.userHeader}>
            <div className={css.userHeaderTitle}>Участники</div>
            <Button
              text={"X"}
              class={css.userCancel}
              onClick={this.props.onClickCancel}
            />
          </div>
          <div className={css.userListWrapper}>
            <div className={css.app}>
              {users.map((user) => (
                <User
                  key={user.id}
                  user={user}
                  onClickUser={() => this.handleClickUser(user)}
                />
              ))}
            </div>
          </div>
        </div>
        {isActivePortModal && (
          <PortModal>
            <UserCardInfo user={currentUser} />
          </PortModal>
        )}
      </div>
    );
  }
}
