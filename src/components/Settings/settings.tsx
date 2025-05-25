import "./setting.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "../Modal/Modal";
import Overlay from "../Overlay/Overlay";
import ModalInfoSettings from "./ModalInfoSettings";
import NotificationsSettings from "./notifications-settings/NotificationsSettings";
import DailyReportSettings from "./daily-report-settings/DailyReportSettings";

const Settings = ({onClose}: {onClose: () => void}) => {
      const [showInfoModal, setShowInfoModal] = useState(false);
      return (
        <Overlay onClose={onClose} title="Paramètres" >
          <form className="settings">
            <p className="settings__description">Ici, tu peux ajuster les réglages tu ressens le besoin de reprendre un peu le contrôle. Mais fais nous confiance : la configuration par défaut est pensée pour toi.</p>
            <p onClick={() => { setShowInfoModal(true) }} className="settings__info">
              <FontAwesomeIcon icon={faCircleInfo} />
              <span>Pourquoi ce choix par défaut ?</span>
            </p>

            <NotificationsSettings />

            <DailyReportSettings />
          </form>

          {showInfoModal && (
            <Modal onClose={() => setShowInfoModal(false)} title="Réglage automatique">
              <ModalInfoSettings />
            </Modal>
          )}
        </Overlay>
    );
}

export default Settings;