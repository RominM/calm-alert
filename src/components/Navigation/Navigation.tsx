import MuteModeButton from "../buttons/muteModeButton/muteModeButton";
import SettingsButton from "../buttons/SettingsButton/SettingsButton";
import ReportButton from "../buttons/ReportButton/reportButton";
import "./navigation.css";

interface NavigationProps {
  isMuted: boolean;
  onToggleMuteModal: () => void;
  onShowSettings: () => void;
}

const Navigation = ({ isMuted, onToggleMuteModal, onShowSettings }: NavigationProps) => {
  return (
    <nav className="navigation">
      <MuteModeButton isMuted={isMuted} onClick={onToggleMuteModal} />
      <div>
        <ReportButton onClick={() => setPage("report")}/>
        <SettingsButton onClick={onShowSettings} />
      </div>
    </nav>
  );
};

export default Navigation;
