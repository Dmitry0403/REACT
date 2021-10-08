import css from "./styles.module.css";

export function Input(props) {
  const errorMessage = props.errorMessage;
  const errorText = props.errorText;
  return (
    <div>
      <input
        type={props.type}
        name={props.name}
        className={css.input + " " + props.classInput}
        onChange={props.onChange}
        onBlur={props.onBlur}
        placeholder={props.placeholder}
        value={props.value}
      />
      {errorMessage && <div className={css.errorMessage}>{errorText}</div>}
    </div>
  );
}
