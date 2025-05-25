import Modal from "../modal/modal";

const Mute = ({ onClose, children, isMuted, onToggleMute }: { onClose: () => void; children: React.ReactNode; isMuted: boolean; onToggleMute: () => void }) => {
  return (
    <Modal title="Mode silencieux" onClose={onClose}>
      <button onClick={() => {
        onToggleMute();
        onClose();
      }}>
        {isMuted ? "Désactiver" : "Activer"}
      </button>
      {children}
    </Modal>
  );
};

export default Mute;
