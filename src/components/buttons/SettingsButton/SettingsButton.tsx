import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

type SettingsButtonProps = {
    onClick: () => void;
}

const SettingsButton = ({ onClick }: SettingsButtonProps) => {
    return (
        <button onClick={onClick}>
          <FontAwesomeIcon icon={faCog} />
        </button>
    );
}

export default SettingsButton;