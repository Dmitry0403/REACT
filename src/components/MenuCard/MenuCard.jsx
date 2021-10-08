import css from "./styles.module.css";
import { Button } from "components/common";

export function MenuCard(props) {
  const listMenu = ["todo", "in_progress", "done", "all"];
  return (
    <div className={css.wrapper}>
      <div className={css.menu}>
        <div className={css.header}>
          <div className={css.headerTittle}>Очистить список</div>
          <Button
            onClick={props.onClick}
            className={css.headerClose}
            text={"X"}
          />
        </div>
        <div className={css.menuList} onClick={props.onClickMenu}>
          {listMenu.map((item) => (
            <div key={item}>
              <Button text={item} className={css.menuList} data={item} />
            </div>
          ))}
          <Button
            text={"выход с аккаунта"}
            className={css.menuList}
            onClick={props.onClickExit}
          />
        </div>
      </div>
    </div>
  );
}
