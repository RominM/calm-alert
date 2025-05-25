import "./modalInfoSettings.scss";

const ModalInfoSettings = () => {
    return (
      <p className="modal-info-settings">On a fait les réglages <strong className="modal-info-settings__strong">pour toi</strong>. Pas par flemme, mais parce qu’ils sont pensés <strong className="modal-info-settings__strong">pour t’aider</strong>.
        <br />
        <br />
        Ces paramètres s’appuient sur des études réelles : sur l’attention, les réflexes numériques, la fatigue mentale.
        Tu vas sûrement trouver ça un peu intense au début — c’est normal. <strong className="modal-info-settings__strong">On casse une habitude.</strong>
        Mais fais nous confiance : ce n’est <strong className="modal-info-settings__strong">ni intrusif, ni moralisateur</strong>. Juste une aide pour remettre un peu de conscience dans tes gestes.
        <br />
        <br />
        <strong className="modal-info-settings__strong">Tu peux tout modifier plus tard si tu veux. Mais essaie d’abord. Vois ce que ça change.</strong>
      </p>
    );
}

export default ModalInfoSettings; 