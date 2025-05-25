import "./mute.scss";

const Mute = () => {
    return (
      <div className="mute">
        <h3>Je ne veux plus recevoir d’alerte :</h3>
        <div className="mute__checkboxes">
          <label>
            <input type="checkbox" checked/>
            pendant 1 heure
          </label>
          <label>
            <input type="checkbox" />
            pendant 2 heures
          </label>
          <label>
            <input type="checkbox" />
            jusqu'à demain
          </label>
          <label>
            <input type="checkbox" />
            jusqu'à ce que je le décide
          </label>
        </div>
      </div>
    );
};

export default Mute;  