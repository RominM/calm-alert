import "./mute-modal.scss";
import Modal from "../modal/modal";
import ButtonCta from "../buttons/button-cta/ButtonCta";
import Mute from "./mute";

const MuteModal = ({ onClose, isMuted, onToggleMute }: { onClose: () => void; isMuted: boolean; onToggleMute: () => void }) => {
  return (
    <Modal title="Mode silencieux" onClose={onClose} >
      <div className="mute-modal">
        <Mute />

        <div className="mute-modal__grouped-buttons">
          <ButtonCta title={isMuted ? "Désactiver" : "Activer"} onClick={() => {
            onToggleMute();
            onClose();
          }} className="confirm"/>
          <ButtonCta title="Annuler" onClick={onClose} className="cancel"/>
        </div>
      </div>
    </Modal>
  );
};

export default MuteModal;
