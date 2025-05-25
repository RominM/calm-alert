import { useState } from "react";
import ButtonCta from "../button-cta/ButtonCta";
import "./time-button.scss";

const TimeButton = ({selectedHour, setSelectedHour}: {selectedHour: string, setSelectedHour: (hour: string) => void}) => {
  const [editing, setEditing] = useState(false);

  const displayHour = selectedHour.replace(":", "h");

  const handleButtonClick = () => setEditing(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedHour(e.target.value);
  };

  const handleInputBlur = () => {
    setEditing(false);
  };

  return (
    <p className="time-button">
      À quelle heure ?{" "}
      {editing ? (
        <input
          className="time-button__input"
          type="time"
          value={selectedHour}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <ButtonCta onClick={handleButtonClick} title={displayHour} className="confirm" />
      )}
    </p>
  );
};

export default TimeButton;
