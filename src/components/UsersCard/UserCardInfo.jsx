import css from "./styles.module.css";
import { Button } from "components/common";

export function UserCardInfo(props) {
  return (
    <div className={css.usercard}>
      <div className={css.usercardHeader}>
        <div className={css.usercardHeaderUsername}>{props.user.name}</div>
        <Button
          text="X"
          className={css.usercardHeaderClose}
          onClick={props.onClickCancel}
        />
      </div>
      <div className={css.usercardInfo}>
        <div>{`nick: ${props.user.username}`}</div>
        <div>{`mail: ${props.user.email}`}</div>
        <div>{`web: ${props.user.website}`}</div>
      </div>
      <Button
        text={props.text}
        className={css.usercardButton}
        onClick={() => props.onClickUserCard(props.user)}
      />
    </div>
  );
}
