import css from "./styles.module.css";
import { Button } from "components/common";

export function LimitCard(props) {
  return (
    <div className={css.limitCard}>
      <div className={css.limitCardTitle}> Предупреждение </div>
      <div className={css.limitCardNotice}>
        В списке in_progress может быть <br /> не более 6 задач
      </div>
      <div className={css.limitCardFooter}>
        <Button
          text="OK"
          className={css.limitCardFooterButton}
          onClick={props.onClickCancel}
        />
      </div>
    </div>
  );
}
