import "./mute-modal.scss";
import Modal from "../Modal/Modal";
import MuteForm from "./MuteForm";

const MuteModal = ({ isOpen, onClose, onToggleMute }: { isOpen: boolean; onClose: () => void; onToggleMute: () => void }) => {
  return (
    <Modal isOpen={isOpen} title="Mode silencieux" onClose={onClose} activateClose={true}>
      <div className="mute-modal">
        <MuteForm onClose={onClose} onToggleMute={onToggleMute} />
      </div>
    </Modal>
  );
};

export default MuteModal;
