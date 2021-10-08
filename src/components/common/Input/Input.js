import css from "./styles.module.css";
const classNames = require("classnames");

export function Input(props) {
  let inputClass;
  let placeholder;
  if (!props.errorMessage) {
    inputClass = classNames(css.input, props.className);
    placeholder = props.placeholder;
  } else {
    inputClass = classNames(css.input, props.className, css.error);
    placeholder = props.errorText;
  }

  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className={inputClass}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={placeholder}
        value={props.value}
      />
    </div>
  );
}
