import "./setting.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import Overlay from "../Overlay/Overlay";
import ModalInfoSettings from "./ModalInfoSettings";
import NotificationsSettings from "./notifications-settings/NotificationsSettings";
import DailyReportSettings from "./daily-report-settings/DailyReportSettings";
import ButtonCta from "../buttons/button-cta/ButtonCta";

const Settings = ({ onClose }: { onClose: () => void }) => {
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);
  const [resetFlag, setResetFlag] = useState(false);

  const handleReset = () => {
    setResetFlag(true);
    setHasChanged(false);
  };

  useEffect(() => {
    if (resetFlag) {
      setResetFlag(false);
    }
  }, [resetFlag]);

  return (
    <Overlay onClose={onClose} title="Paramètres">
      <form className="settings">
        <p className="settings__description">
          Ici, tu peux ajuster les réglages si tu ressens le besoin de reprendre un peu le contrôle. Mais fais-nous confiance : la configuration par défaut est pensée pour toi.
        </p>

        <p className="settings__info" onClick={() => setShowInfoModal(true)}>
          <FontAwesomeIcon icon={faCircleInfo} />
          <span>Pourquoi ce choix par défaut ?</span>
        </p>

        {hasChanged && (
          <ButtonCta
            onClick={handleReset}
            title="Réinitialiser les paramètres"
            className="confirm"
          />
        )}

        <NotificationsSettings isReset={resetFlag} onChange={(changed) => setHasChanged(changed)} />
        <DailyReportSettings isReset={resetFlag} onChange={(changed) => setHasChanged(changed)} />
      </form>

      {showInfoModal && (
        <Modal
          isOpen={showInfoModal}
          onClose={() => setShowInfoModal(false)}
          title="Réglage automatique"
        >
          <ModalInfoSettings />
        </Modal>
      )}
    </Overlay>
  );
};

export default Settings;
