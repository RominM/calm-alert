import "./home.scss";
import BreakButton from "../components/buttons/break-button/BreakButton";
import DailyReportButton from "../components/buttons/daily-report-button/DailyReportButton";

function Home() {
  const dynamicMessage = "Il est temps de te rappeler que tu es capable de te contrôler.";
  return <div className="home">
    <DailyReportButton />
    <h1 className="home__title">Tu le sais déjà</h1>
    <p className="home__message">{dynamicMessage}</p>
    <BreakButton />
  </div>;
}

export default Home;
