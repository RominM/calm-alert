import "./daily-report-settings.scss";
import CustomToggle from "../../global/custom-toggle/CustomToggle";
import TimeButton from "../../buttons/time-button/TimeButton";
import Title from "../../title/Title";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DailyReportSettings = () => {
  const [toggles, setToggles] = useState({
    dailyReport: true,
    screenTime: true,
    openings: true,
    scrollDistance: true,
    co2Impact: true,
  });

  const [selectedHour, setSelectedHour] = useState("07:00");

  const handleToggleChange = (key: keyof typeof toggles) => (checked: boolean) => {
    setToggles({ ...toggles, [key]: checked });
  };

  return (
    <section className="daily-report-settings">
      <Title title="Rapports quotidiens" icon={faChartLine} />
      
      <CustomToggle label="Souhaites-tu recevoir ce rapport ?" onChange={handleToggleChange('dailyReport')} checked={toggles.dailyReport}/>
      {toggles.dailyReport && <TimeButton selectedHour={selectedHour} setSelectedHour={setSelectedHour} />}
      {toggles.dailyReport && <CustomToggle label="Temps d’écran" onChange={handleToggleChange('screenTime')} checked={toggles.screenTime}/>}
      {toggles.dailyReport && <CustomToggle label="Nombre d’ouverture" onChange={handleToggleChange('openings')} checked={toggles.openings}/>}
      {toggles.dailyReport && <CustomToggle label="Distance scrollée" onChange={handleToggleChange('scrollDistance')} checked={toggles.scrollDistance}/>}
      {toggles.dailyReport && <CustomToggle label="Impact CO² estimé" onChange={handleToggleChange('co2Impact')} checked={toggles.co2Impact}/>}
    </section>
  );
}

export default DailyReportSettings; 