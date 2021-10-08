import css from "./styles.module.css";
const classNames = require("classnames");

export function Input(props) {
  const inputClass = classNames(css.input, props.className);
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className={inputClass}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        value={props.value}
      />
      {props.errorMessage && <div className={css.error}>{props.errorText}</div>}
    </div>
  );
}
