import "./notifications-settings.scss";
import Title from "../../title/Title";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { CustomRange } from "../../global/custom-range/CustomRange";
import { useState } from "react";
import Dropdown from "../../global/dropdown/Dropdown";

const NotificationsSettings = () => {
    const [firstAlert, setFirstAlert] = useState<number>(6);
    const [nextAlert, setNextAlert] = useState<number>(3);
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
        
        <Dropdown />
      </section>
    );
}

export default NotificationsSettings;