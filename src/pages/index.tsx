import "../style/global.scss";
import "./page.scss";
import { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Settings from "../components/Settings/Settings";
import MuteModal from "../components/Mute/MuteModal";
import Report from "../components/Report/Report";
import Home from "../components/Home/Home";

type View = "Home" | "Report";

const Pages = () => {
  const [view, setView] = useState<View>("Home");
  const [transitionDirection, setTransitionDirection] = useState<"left" | "right">("left");
  const [showSettings, setShowSettings] = useState(false);
  const [showMuteModal, setShowMuteModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleReport = () => {
    setTransitionDirection(view === "Home" ? "left" : "right");
    setView(view === "Home" ? "Report" : "Home");
  };

  return (
    <div className="layout">
      <Navigation
        isMuted={isMuted}
        onToggleMuteModal={() => setShowMuteModal(true)}
        onShowSettings={() => setShowSettings(true)}
        onToggleReport={handleToggleReport}
        isReportActive={view === "Report"}
      />

      <main className={`main main--${transitionDirection}`}>
      <div className={`view-container ${view}`}>
        <div className="slide">
          <Home />
        </div>
        <div className="slide">
          <Report />
        </div>
      </div>

        {showSettings && <Settings onClose={() => setShowSettings(false)} />}
        
        {showMuteModal && (
          <MuteModal
            onToggleMute={() => setIsMuted(prev => !prev)}
            onClose={() => setShowMuteModal(false)}
          />
        )}
      </main>
    </div>
  );
};

export default Pages;
