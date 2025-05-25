import "./mute-modal.scss";
import Modal from "../Modal/Modal";
import MuteForm from "./MuteForm";

const MuteModal = ({ onClose, onToggleMute }: { onClose: () => void; onToggleMute: () => void }) => {
  return (
    <Modal title="Mode silencieux" onClose={onClose} >
      <div className="mute-modal">
        <MuteForm onClose={onClose} onToggleMute={onToggleMute} />
      </div>
    </Modal>
  );
};

export default MuteModal;
