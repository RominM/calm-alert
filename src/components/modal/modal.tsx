import type { ReactNode } from "react";
import "./modal.scss";
import Title from "../title/Title";

type ModalProps = {
  title?: string;
  children: ReactNode;
  onClose: () => void;
};

export const Modal = ({ title, children, onClose }: ModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {title && <Title title={title} />}
        <button className="modal-content__close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-content__body">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
