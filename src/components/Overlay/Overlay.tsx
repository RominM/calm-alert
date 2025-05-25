import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";
import "./overlay.scss";

type OverlayProps = {
    title?: string;
  onClose: () => void;
  children?: ReactNode;
}

const Overlay = ({ title, onClose, children }: OverlayProps) => {
    return (
      <div className="overlay">
        {title && <h2 className="overlay__title">{title}</h2>}
        <div className="overlay__cross">
            <FontAwesomeIcon icon={faXmark} onClick={onClose} />
        </div>
        <div className="overlay__content">
            {children}
        </div>
      </div>
    );
}

export default Overlay;