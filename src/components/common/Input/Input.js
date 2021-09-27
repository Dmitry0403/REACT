import css from "./styles.module.css";

export function Input(props) {
  return (
    <input
      className={(css.input, props.class)}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.text}
    />
  );
}
