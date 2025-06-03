import ButtonCta from "../buttons/button-cta/ButtonCta";
import Modal from "../Modal/Modal";
import { LocalNotifications } from "@capacitor/local-notifications";
import { useState, useEffect } from "react";

const NavigateTo = {
  HOME: 'HOME',
  SETTINGS: 'SETTINGS'
}

const isDev = process.env.NODE_ENV === 'development';

const AgreementModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: (openSettings: boolean) => void }) => {
  const [permissionState, setPermissionState] = useState<'prompt' | 'prompt-with-rationale' | 'granted' | 'denied' | null>(null);
  const [showRationale, setShowRationale] = useState(false);
console.log(process.env.NODE_ENV);
  useEffect(() => {
    if (isOpen) {
      checkPermissions();
    }
  }, [isOpen]);

  async function checkPermissions() {
    const check = await LocalNotifications.checkPermissions();

    setPermissionState(check.display);
    if (check.display === 'granted') {
      // Permission déjà accordée, on peut fermer la modale et continuer
      onClose(false);
    }
  }

  async function askNotificationPermission(destination: string) {
    if (permissionState === 'prompt-with-rationale') {
      // Afficher un message explicatif avant de redemander
      setShowRationale(true);
      return;
    }

    const permission = await LocalNotifications.requestPermissions();
    
    let display = permission.display;
    if (isDev) {
      // Force le cas 'prompt' ou 'denied' en dev pour tests
      display = 'prompt'; // ou 'denied'
    }
    
    if (display === 'granted') {
      setPermissionState('granted');
      console.log('Permission notifications accordée');
      onClose(destination === NavigateTo.SETTINGS);
    } else if (display === 'denied') {
      setPermissionState('denied');
      console.log('Permission notifications refusée');
    } else {
      setPermissionState(display);
      console.log('Permission notifications :', display);
    }
  }

  function handleRationaleConfirm(destination: string) {
    setShowRationale(false);
    askNotificationPermission(destination);
  }

  function handleOpenSettings() {
    // Ouvre les paramètres système de l'app pour que l'utilisateur active la permission manuellement
    // Pour Android c’est souvent :
    // Capacitor App - openSettings() via plugin (à installer si besoin)
    // Ici juste un placeholder, tu peux ajouter le vrai code
    console.log('Ouvrir les paramètres de l’app');
  }

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} title="Changer une habitude, c’est inconfortable." onClose={() => onClose(false)}>

      {permissionState === 'denied' && (
        <>
          <p>Tu as refusé les notifications. Pour profiter pleinement de l’application, il faut autoriser les notifications dans les paramètres de ton téléphone.</p>
          <button onClick={handleOpenSettings}>Ouvrir les paramètres</button>
          <button onClick={() => onClose(false)}>Fermer</button>
        </>
      )}

      {showRationale && (
        <>
          <p>Les notifications sont importantes pour te rappeler gentiment de garder le cap. Veux-tu bien autoriser les notifications ?</p>
          <button onClick={() => handleRationaleConfirm(NavigateTo.HOME)}>Oui, j’accepte</button>
          <button onClick={() => setShowRationale(false)}>Non, merci</button>
        </>
      )}

      {!showRationale && permissionState !== 'denied' && (
        <>
          <p>Tu vas peut-être recevoir pas mal d’alertes au début. Et c’est normal : ton cerveau est accro à l’instantané. Mais on est là <span>pour t’aider à reprendre le contrôle.</span>
            On ne veut pas te frustrer. Juste te réveiller, tranquillement mais fermement, avec des rappels basés sur des études sérieuses.</p>

          <p>- En moyenne, tu consultes ton téléphone toutes les 6 minutes. On veut t’aider à retrouver du temps, de l’attention, et du calme. -</p>

          <div>
            <p>Par défaut, lance le système avec notre paramétrage équilibré. Tu pourras ajuster tes paramètres à tout moment.</p>
            <ButtonCta onClick={() => askNotificationPermission(NavigateTo.HOME)} title="Ok, je joue le jeu. Lancez l’expérience." className="confirm" />
          </div>

          <div>
            <p>Je veux personnaliser les alertes dès maintenant.</p>
            <button onClick={() => askNotificationPermission(NavigateTo.SETTINGS)}>Paramètres</button>
          </div>
        </>
      )}
    </Modal>
  )
}

export default AgreementModal;
