import "./notifications-settings.scss";
import Title from "../../title/Title";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { CustomRange } from "../../global/custom-range/CustomRange";
import { useState, useEffect } from "react";
import Dropdown from "../../global/dropdown/Dropdown";
import { Preferences } from '@capacitor/preferences';

interface NotificationsSettingsProps {
  isReset: boolean;
  onChange: (hasChanged: boolean) => void;
}

const MessageStyle = {
  STANDARD: "Standard",
  ENCOURAGING: "Encourageant",
  DIRECT: "Direct & Frontal",
  POETIC: "Poétique",
} as const;

type MessageStyle = typeof MessageStyle[keyof typeof MessageStyle];

const defaultSettings = {
  firstAlert: 6,
  nextAlert: 3,
  dropdown: MessageStyle.STANDARD,
};

const STORAGE_KEY = 'notification-settings';

const NotificationsSettings = ({ isReset, onChange }: NotificationsSettingsProps) => {
  const [firstAlert, setFirstAlert] = useState<number>(defaultSettings.firstAlert);
  const [nextAlert, setNextAlert] = useState<number>(defaultSettings.nextAlert);
  const [dropdown, setDropdown] = useState<MessageStyle>(defaultSettings.dropdown);
  const [hasLoaded, setHasLoaded] = useState(false);

  const checkHasChanged = (first: number, next: number, style: MessageStyle) => {
    return (
      first !== defaultSettings.firstAlert ||
      next !== defaultSettings.nextAlert ||
      style !== defaultSettings.dropdown
    );
  };

  useEffect(() => {
    const loadSettings = async () => {
      const { value } = await Preferences.get({ key: STORAGE_KEY });
      if (value) {
        try {
          const parsed = JSON.parse(value);
          if (parsed.firstAlert) setFirstAlert(parsed.firstAlert);
          if (parsed.nextAlert) setNextAlert(parsed.nextAlert);
          if (parsed.dropdown) setDropdown(parsed.dropdown);
        } catch (e) {
          console.error("Erreur lors du parsing des préférences :", e);
        }
      }
      setHasLoaded(true);
    };

    loadSettings();
  }, []);

  useEffect(() => {
    if (!hasLoaded) return;

    const saveSettings = async () => {
      const settings = {
        firstAlert,
        nextAlert,
        dropdown,
      };
      await Preferences.set({
        key: STORAGE_KEY,
        value: JSON.stringify(settings),
      });
    };

    saveSettings();
    onChange(checkHasChanged(firstAlert, nextAlert, dropdown));
  }, [firstAlert, nextAlert, dropdown, hasLoaded]);

  useEffect(() => {
    if (isReset) {
      setFirstAlert(defaultSettings.firstAlert);
      setNextAlert(defaultSettings.nextAlert);
      setDropdown(defaultSettings.dropdown);
      Preferences.remove({ key: STORAGE_KEY });
      onChange(false);
    }
  }, [isReset]);

  return (
    <section className="notifications-settings">
      <Title title="Notifications" icon={faBell} />

      <CustomRange
        label="Temps avant la première alerte "
        min={3}
        max={18}
        step={3}
        value={firstAlert}
        onChange={setFirstAlert}
        unit="min"
      />

      <CustomRange
        label="Fréquence des rappels après la 1ère alerte"
        min={1}
        max={10}
        step={1}
        value={nextAlert}
        onChange={setNextAlert}
        unit="min"
      />

      <Dropdown
        title="Style des messages"
        options={Object.values(MessageStyle)}
        selectedOption={dropdown}
        setSelectedOption={(option: string) => setDropdown(option as MessageStyle)}
      />
    </section>
  );
};

export default NotificationsSettings;
