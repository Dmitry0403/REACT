import ReactDOM from "react-dom";
import css from "./styles.module.css";


const Portal = (props) => {
  return ReactDOM.createPortal(props.children, document.querySelector("body"));
};

const BaseModal = (props) => {
  return <div className={css.modalWrapper}>{props.children}</div>;
};

export const PortModal = (props) => {
  return (
    <Portal>
      <BaseModal>
        <div className={css.modal}>{props.children}</div>
      </BaseModal>
    </Portal>
  );
};
