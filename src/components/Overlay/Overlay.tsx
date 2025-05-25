import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

type OverlayProps = {
    title?: string;
  onClose: () => void;
  children?: ReactNode;
}

const Overlay = ({ title, onClose, children }: OverlayProps) => {
    return (
      <div className="overlay">
        {title && <h2 className="modal-title">{title}</h2>}
        <FontAwesomeIcon icon={faXmark} onClick={onClose} />
        {children}
      </div>
    );
}

export default Overlay;