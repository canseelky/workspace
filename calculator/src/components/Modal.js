import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Modal = ({ open, close, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className={styles.overlay__styles} onClick={close}>
      <div className={styles.main}>{children}</div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
