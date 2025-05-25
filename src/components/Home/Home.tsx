import "./home.scss";
import BreakButton from "../buttons/break-button/BreakButton";
import DailyReportButton from "../buttons/daily-report-button/DailyReportButton";

function Home() {
  const dynamicMessage = "Il est temps de te rappeler que tu es capable de te contrôler.";
  return <div className="home">
    <DailyReportButton />
    <h1 className="main-title">Tu le sais déjà</h1>
    <p className="home__message">{dynamicMessage}</p>
    <BreakButton />
  </div>;
}

export default Home;
