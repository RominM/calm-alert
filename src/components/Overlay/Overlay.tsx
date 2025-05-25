import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { type ReactNode, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  type PanInfo
} from "framer-motion";
import "./overlay.scss";

type OverlayProps = {
  title?: string;
  onClose: () => void;
  children?: ReactNode;
};

const Overlay = ({ title, onClose, children }: OverlayProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0 });
  }, [controls]);

  const handleDragEnd = (e: PointerEvent, info: PanInfo) => {
    const isAtTop = contentRef.current?.scrollTop === 0;
    const threshold = window.innerHeight / 2;

    if (info.offset.y > threshold && isAtTop) {
      onClose();
    } else {
      controls.start({ y: 0 });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="overlay__backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <motion.div
          className="overlay"
          ref={contentRef}
          onClick={(e) => e.stopPropagation()}
          initial={{ y: "100%" }}
          animate={controls}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, info) => handleDragEnd(e as PointerEvent, info)}
        >
          {title && <h1 className="main-title">{title}</h1>}
          <div className="overlay__cross">
            <FontAwesomeIcon icon={faXmark} onClick={onClose} />
          </div>
          <div className="overlay__content">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Overlay;
