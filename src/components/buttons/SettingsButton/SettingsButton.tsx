import "./settings-button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SettingsButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick} className="nav__buttons">
      <FontAwesomeIcon icon={faCog} />
    </button>
  );
}

export default SettingsButton;