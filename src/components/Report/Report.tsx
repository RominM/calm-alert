import UserReportData from "./user-report-data/UserReportData";
import "./report.scss";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const Report = () => {
  const userReportsData: userReportType[] = [
    {title:'Total depuis la création', icon: faChartLine, date: "2025-05-25", screenTime: 2000, maxDuration: 2000, openings: 10, scrollDistance: 1000, co2Impact: 10 },
    {title:'Dernier rapport reçu', icon: faChartLine, date: "2025-05-24", screenTime: 2000, maxDuration: 2000, openings: 10, scrollDistance: 1000, co2Impact: 10 },
    {title:'Tendance de la semaine', icon: faChartLine, date: "2025-05-23", screenTime: 2000, maxDuration: 2000, openings: 10, scrollDistance: 1000, co2Impact: 10 }
  ];  

  return (
    <div className="report">
      <h1 className="main-title">Rapports</h1>
      <p className="report__subtitle">Suis l’évolution de tes interaction avec ton appareil et vois comment elles évolue. On espère que ça te sera bénéfique !</p>

      {userReportsData.map((report, index) => {
        return (
          <UserReportData key={index} report={report}/>
        )
      })}
    </div>
  );
}

export default Report;