import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../modal/modal";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import ModalInfoSettings from "./ModalInfoSettings";

const Settings = ({onClose}: {onClose: () => void}) => {
      const [showInfoModal, setShowInfoModal] = useState(false);
      return (
        <Overlay onClose={onClose} title="Paramètres" >
          <p>Ici, tu peux ajuster les réglages tu ressens le besoin de reprendre un peu le contrôle. Mais fais nous confiance : la configuration par défaut est pensée pour toi.</p>
          <p onClick={() => {setShowInfoModal(true)}}><FontAwesomeIcon icon={faCircleInfo } /> Pourquoi ce choix par défaut ?</p>
          
          {showInfoModal && (
            <Modal onClose={() => setShowInfoModal(false)} title="Réglage automatique">
              <ModalInfoSettings />
            </Modal>
          )}
        </Overlay>
    );
}

export default Settings;