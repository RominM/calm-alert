import "./user-report-data.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormattedDuration } from "../../../utils/formatDuration";
import { useFormattedDistance } from "../../../utils/useFormattedDistance";
import { useFormattedWeight } from "../../../utils/formatWeight";

const UserReportData = ({ report }: { report: userReportType }) => {  
  return (
    <div className="user-report-data">
      <div className="user-report-data__title">
        <FontAwesomeIcon icon={report.icon} />
        <h2 className="main-title">{report.title}</h2>
      </div>

      <ul className="user-report-data__content">
        <li className="user-report-data__content__item"><p className="name screen-time">Temps total d'écran</p><span className="value screen-time">{useFormattedDuration(report.screenTime)}</span></li>
        <li className="user-report-data__content__item"><p className="name screen-openings">d'ouvertures d'écran</p><span className="value screen-openings">{report.openings}</span></li>
        <li className="user-report-data__content__item"><p className="name scroll">scrollée</p><span className="value scroll">{useFormattedDistance(report.scrollDistance)}</span></li>
        <li className="user-report-data__content__item"><p className="name screen-time">Temps moyen par session</p><span className="value screen-time">{useFormattedDuration(report.screenTime / report.openings)}</span></li>
        <li className="user-report-data__content__item"><p className="name max-duration">Durée max sans interruption</p><span className="value max-duration">{useFormattedDuration(report.maxDuration)}</span></li>
        <li className="user-report-data__content__item"><p className="name co2">Impact CO2</p><span className="value co2">{useFormattedWeight(report.co2Impact)}</span></li>
      </ul>
    </div>
  );
}

export default UserReportData;  