import css from "./styles.module.css";
import { Button } from "components/common/Button";

export function EventCard(props) {
  return (
    <div className={css.eventCard}>
      <div className={css.eventCardTitle}>{props.title}</div>
      <div className={css.eventCardText}>{props.text}</div>
      <div className={css.eventCardFooter}>
       <Button text={"Да"} onClick={props.onClick}/>
       <Button text={"отмена"} onClick={props.onClickCancel}/>
      </div>
    </div>
  );
}
