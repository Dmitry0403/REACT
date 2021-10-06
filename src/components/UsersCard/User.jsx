import css from "./styles.module.css"

export function User(props) {
    return (
      <div className={css.userList} onClick={props.onClickUser}>
        <div className={css.userListAvatar}>
          <div className={css.userListInitial}>
            {props.user.name
              .toUpperCase()
              .split(" ")
              .map((item) => item[0])
              .join("")}
          </div>
        </div>
        <div className={css.userListTicker}>
          <div className={css.userListName}>{props.user.name}</div>
        </div>
      </div>
    );
  }
  