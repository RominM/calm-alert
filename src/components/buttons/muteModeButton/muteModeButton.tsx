import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellSlash } from "@fortawesome/free-solid-svg-icons";

type MuteModeButtonProps = {
  isMuted: boolean;
  onClick: () => void;
};

const MuteModeButton = ({ isMuted, onClick }: MuteModeButtonProps) => {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={isMuted ? faBellSlash : faBell} />
    </button>
  );
}

export default MuteModeButton;
