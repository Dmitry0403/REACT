import css from "./styles.module.css";
const classNames = require("classnames");

export function Button(props) {
  const btnClass = classNames(css.button, props.className, props.icon);
  return (
    <div className={btnClass} onClick={props.onClick} data-name={props.data}>
      {props.text}
    </div>
  );
}
