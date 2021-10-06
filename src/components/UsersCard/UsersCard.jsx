import React from "react";
import css from "./styles.module.css";
import { User } from "./User";
import { UserCardInfo } from "./UserCardInfo";
import { Button } from "components/common/Button";
import { PortModal } from "../PortModal/PortModal";
import { Loader } from "../Loader/Loader";

export class UsersCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      currentUser: {},
      isActivePortModal: false,
      isLoader: false,
      isError: false,
    };
  }

  async GetDataFromServer() {
    this.setState({ isLoader: true });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ users: data, isLoader: false });
      } else throw new Error("Ошибка");
    } catch (err) {
      this.setState({ isError: true, isLoader: false });
    }
  }

  componentDidMount() {
    this.GetDataFromServer();
  }

  handleClickUser = (user) => {
    this.setState({
      isActivePortModal: true,
      currentUser: user,
    });
  };

  handleCancelUserCardInfo = () => {
    this.setState({
      isActivePortModal: false,
    });
  };

  handleClickUserCard = (user) => {
    this.props.onClickUserCard(user);
    this.setState({
      isActivePortModal: false,
    });
  };

  render() {
    const { users, currentUser, isActivePortModal, isLoader, isError } =
      this.state;
    return (
      <div className={css.overlay}>
        <div className={css.user}>
          <div className={css.userHeader}>
            <div className={css.userHeaderTitle}>Участники</div>
            <Button
              text={"X"}
              classButton={css.userCancel}
              onClick={this.props.onClickCancel}
            />
          </div>
          <div className={css.userListWrapper}>
            <div className={css.app}>
              {isLoader && <Loader />}
              {isError && <div>Ошибка, данные невозможно получить</div>}
              {!isLoader && !isError && (
                <div>
                  {users.map((user) => (
                    <User
                      key={user.id}
                      user={user}
                      onClickUser={() => this.handleClickUser(user)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {isActivePortModal && (
          <PortModal>
            <UserCardInfo
              user={currentUser}
              onClickCancel={this.handleCancelUserCardInfo}
              onClickUserCard={this.handleClickUserCard}
              text={"добавить на карточку"}
            />
          </PortModal>
        )}
      </div>
    );
  }
}
