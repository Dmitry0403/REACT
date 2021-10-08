import css from "./styles.module.css";
import { Input } from "components/common";
import { Button } from "components/common";

export function DateCard(props) {
  return (
    <div className={css.cardWrapper}>
      <div className={css.card}>
        <div className={css.cardHeader}>
          <div className={css.cardHeaderName}>Дата</div>
          <div>
            <Button
              className={css.cardHeaderClose}
              text="X"
              onClick={props.onClickClosePortModal}
            />
          </div>
        </div>
        <div>
          <Input
            className={css.cardInput}
            type="date"
            value={props.value}
            onChange={props.onChangeDate}
          />
        </div>
      </div>
    </div>
  );
}
