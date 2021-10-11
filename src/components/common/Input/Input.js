import css from "./styles.module.css";
import classNames from "classnames";

export function Input(props) {
  const inputClass = classNames(css.input, props.className, {
    [css.error]: Boolean(props.errorMessage),
  });

  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className={inputClass}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.errorMessage || props.placeholder}
        value={props.value}
      />
    </div>
  );
}
