import ButtonCta from "../buttons/button-cta/ButtonCta";
import Modal from "../Modal/Modal";

const AgreementModal = ({ onClose }: { onClose: () => void }) => {
    return (
      <Modal title="Changer une habitude, c’est inconfortable." onClose={onClose}>
        <p>Tu vas peut-être recevoir pas mal d’alertes au début. Et c’est normal : ton cerveau est accro à l’instantané. Mais on est là <span>pour t’aider à reprendre le contrôle.</span>
          On ne veut pas te frustrer. Juste te réveiller, tranquillement mais fermement, avec des rappels basés sur des études sérieuses.</p>
        
        <p>- En moyenne, tu consultes ton téléphone toutes les 6 minutes. On veut t’aider à retrouver du temps, de l’attention, et du calme. -</p>
        
        <div>
          <p>Par défaut, lance le système avec notre paramétrage équilibré. Tu pourras ajuster tes paramètres à tout moment.</p>
        <ButtonCta onClick={onClose} title="Ok, je joue le jeu. Lancez l’expérience." className="confirm"/>
        </div>

        <div>
          <p>Je veux personnaliser les alertes dès maintenant.</p>
          <button>Paramètres</button>
        </div>
      </Modal>
    )
}

export default AgreementModal 