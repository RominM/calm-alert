import "./mute-form.scss";
import ButtonCta from "../buttons/button-cta/ButtonCta";

const MuteForm = ({onClose, onToggleMute}: {onClose: () => void; onToggleMute: () => void}) => {
    return (
      <div className="mute-form">
        <h3 className="mute-form__title">Je ne veux plus recevoir d’alerte :</h3>

        <form className="mute-form__checkboxes">
          <label className="mute-form__checkboxes__label">
            <input type="radio" name="mute-duration"/>
            pendant 1 heure
          </label>
          <label className="mute-form__checkboxes__label">
            <input type="radio" name="mute-duration"/>
            pendant 2 heures
          </label>
          <label className="mute-form__checkboxes__label">
            <input type="radio" name="mute-duration"/>
            jusqu'à demain
          </label>
          <label className="mute-form__checkboxes__label">
            <input type="radio" name="mute-duration"/>
            jusqu'à ce que je le décide
          </label>
        </form>

        <div className="mute-form__grouped-buttons">
          <ButtonCta title="Activer" onClick={() => {
            onToggleMute();
            onClose();
          }} className="confirm"/>
          <ButtonCta title="Annuler" onClick={onClose} className="cancel"/>
        </div>
      </div>
    );
};

export default MuteForm;  