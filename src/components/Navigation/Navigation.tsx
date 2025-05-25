import MuteModeButton from "../buttons/muteModeButton/muteModeButton";
import SettingsButton from "../buttons/SettingsButton/SettingsButton";

interface NavigationProps {
  isMuted: boolean;
  onToggleMuteModal: () => void;
  onShowSettings: () => void;
}

const Navigation = ({ isMuted, onToggleMuteModal, onShowSettings }: NavigationProps) => {
  return (
    <nav>
      <MuteModeButton isMuted={isMuted} onClick={onToggleMuteModal} />
      <SettingsButton onClick={onShowSettings} />
    </nav>
  );
};

export default Navigation;
