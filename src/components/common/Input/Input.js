import css from "./styles.module.css";

export function Input(props) {
  return (
    <input
      type={props.type}
      className={css.input + " " + props.class}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}
