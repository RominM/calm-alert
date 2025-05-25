import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

const SettingsButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={faCog} />
    </button>
  );
}

export default SettingsButton;