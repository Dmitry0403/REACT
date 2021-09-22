import css from "./styles.module.css";

export function Button(props) {
  return (
    <div className={css.button +' '+ props.icon} onClick={props.onClick}>
      {props.text}
    </div>
  );
}
