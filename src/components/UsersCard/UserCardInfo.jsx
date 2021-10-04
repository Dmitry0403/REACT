import css from "./styles.module.css";
import { Button } from "components/common/Button";

export function UserCardInfo(props) {
  return (
    <div className={css.usercard}>
      <div className={css.usercardHeader}>
        <div className={css.usercardHeaderUsername}></div>
        <Button text="x" class={css.usercardHeaderClose} onClick={props.onClickCancel}/>
      </div>
      <div className={css.usercardInfo}>
        <div>{`nick: ${props.user.username}`}</div>
        <div>{`mail: ${props.user.email}`}</div>
        <div>{`web: ${props.user.website}`}</div>
      </div>
      <Button text={"добавить на краточку"} class={css.usercardButton} onClick={props.onClickUserCard}/>
    </div>
  );
}
