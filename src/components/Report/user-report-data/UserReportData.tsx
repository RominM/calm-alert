import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./user-report-data.scss";

const UserReportData = ({report}: {report: userReportType}) => {
  return (
    <div className="user-report-data">
      <div className="user-report-data__title">
        <FontAwesomeIcon icon={report.icon} />
        <h2 className="main-title">{report.title}</h2>
      </div>    
      <p>Temps total d'écran<span>{report.screenTime}</span></p>
      <p><span>{report.openings}</span> d'ouvertures d'écran</p>
      <p><span>{report.scrollDistance}</span>scrollée</p>
      <p><span>{report.screenTime / report.openings}</span>Temps moyen par session</p>
      <p>Durée max sans interruption<span>{report.maxDuration}</span></p>
      <p>Impact CO2<span>{report.co2Impact}</span></p>
    </div>
  );
}

export default UserReportData;  