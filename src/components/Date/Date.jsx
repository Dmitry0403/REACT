import css from "./styles.module.css";
import { Input } from "components/common/Input";
import { Button } from "components/common/Button";

export function Date(props) {
  return (
    <div className={css.cardWrapper}>
      <div className={css.card}>
        <div className={css.cardHeader}>
          <div className={css.cardHeaderName}>Дата</div>
          <div>
            <Button class={css.cardHeaderClose} text="X" onClick={props.onClickClosePortModal}/>
          </div>
        </div>
        <div>
          <Input class={css.cardInput} type="date" value={props.value} onChange={props.onChangeDate}/>
        </div>
      </div>
    </div>
  );
}
