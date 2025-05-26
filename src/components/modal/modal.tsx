import { type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./modal.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  activateClose?: boolean;
  children?: ReactNode;
};

const Modal = ({ isOpen, onClose, title, activateClose = false, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={activateClose ? onClose : undefined}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {activateClose && <button className="modal-content__close" onClick={onClose}>
              &times;
            </button>}
            {title && <h2 className="title">{title}</h2>}
            <div className="modal-content__body">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
