import css from "./styles.module.css";

export function Input(props) {
  return (
    <input
      type={props.type}
      name={props.name}
      className={css.input + " " + props.classInput}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}
