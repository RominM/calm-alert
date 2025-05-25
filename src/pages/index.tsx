import "../style/global.scss";
import { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import Settings from "../components/Settings/Settings";
import Mute from "../components/Mute/MuteModal";
import Report from "./report";
import Home from "./home";

const Pages = () => {
  const [page, setPage] = useState<"home" | "report">("home");
  const [showSettings, setShowSettings] = useState(false);
  const [showMuteModal, setShowMuteModal] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="layout">
      <Navigation
        isMuted={isMuted}
        onToggleMuteModal={() => setShowMuteModal(true)}
        onShowSettings={() => setShowSettings(true)}
      />

      <main className="main">
        {page === "home" && <Home />}
        {page === "report" && <Report />}
        {showSettings && <Settings onClose={() => setShowSettings(false)} />}
        {showMuteModal && (
          <Mute
            isMuted={isMuted}
            onToggleMute={() => setIsMuted(prev => !prev)}
            onClose={() => setShowMuteModal(false)}
          />
        )}
      </main>
    </div>
  );
} 

export default Pages;
