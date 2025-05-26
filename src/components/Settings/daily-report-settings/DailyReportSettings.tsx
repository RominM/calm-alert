import "./daily-report-settings.scss"; 
import CustomToggle from "../../global/custom-toggle/CustomToggle";
import TimeButton from "../../buttons/time-button/TimeButton";
import Title from "../../title/Title";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Preferences } from "@capacitor/preferences";

interface DailyReportSettingsProps {
    isReset: boolean;
    onChange: (changed: boolean) => void;
}

const defaultSettings = {
  dailyReport: true,
  screenTime: true,
  openings: true,
  scrollDistance: true,
  co2Impact: true,
};

const STORAGE_KEY = 'daily-report-settings';

const DailyReportSettings = ({ isReset, onChange }: DailyReportSettingsProps) => {
  const [selectedHour, setSelectedHour] = useState("07:00");
  const [toggles, setToggles] = useState(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);

  const handleToggleChange = (key: keyof typeof toggles) => (checked: boolean) => {
    setToggles(prev => {
      const newToggles = { ...prev, [key]: checked };
      return newToggles;
    });
  };

  const checkHasChanged = (toggles: typeof defaultSettings) => {
    return (
      toggles.dailyReport !== defaultSettings.dailyReport ||
      toggles.screenTime !== defaultSettings.screenTime ||
      toggles.openings !== defaultSettings.openings ||
      toggles.scrollDistance !== defaultSettings.scrollDistance ||
      toggles.co2Impact !== defaultSettings.co2Impact
    );
  };

  useEffect(() => {
    const loadSettings = async () => {
      const { value } = await Preferences.get({ key: STORAGE_KEY });
      if (value) {
        try {
          const parsed = JSON.parse(value);
          if (parsed.toggles) setToggles(parsed.toggles);
          if (parsed.hour) setSelectedHour(parsed.hour);
        } catch (e) {
          console.error("Erreur lors du parsing des préférences :", e);
        }
      }
      setIsLoading(false);
    };

    loadSettings();
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const saveSettings = async () => {
      const settings = {
        toggles,
        hour: selectedHour,
      };
      await Preferences.set({
        key: STORAGE_KEY,
        value: JSON.stringify(settings),
      });
    };

    saveSettings();
    onChange(checkHasChanged(toggles));
  }, [toggles, selectedHour, isLoading]);

  useEffect(() => {
    if (isReset) {
      setToggles(defaultSettings);
      setSelectedHour("07:00");
      Preferences.remove({ key: STORAGE_KEY });
      onChange(false);
    }
  }, [isReset]);

  return (
    <section className="daily-report-settings">
      <Title title="Rapports quotidiens" icon={faChartLine} />
      <CustomToggle label="Souhaites-tu recevoir ce rapport ?" onChange={handleToggleChange('dailyReport')} checked={toggles.dailyReport} />
      {toggles.dailyReport && <TimeButton selectedHour={selectedHour} setSelectedHour={setSelectedHour} />}
      {toggles.dailyReport && <CustomToggle label="Temps d’écran" onChange={handleToggleChange('screenTime')} checked={toggles.screenTime} />}
      {toggles.dailyReport && <CustomToggle label="Nombre d’ouverture" onChange={handleToggleChange('openings')} checked={toggles.openings} />}
      {toggles.dailyReport && <CustomToggle label="Distance scrollée" onChange={handleToggleChange('scrollDistance')} checked={toggles.scrollDistance} />}
      {toggles.dailyReport && <CustomToggle label="Impact CO² estimé" onChange={handleToggleChange('co2Impact')} checked={toggles.co2Impact} />}
    </section>
  );
};

export default DailyReportSettings;
