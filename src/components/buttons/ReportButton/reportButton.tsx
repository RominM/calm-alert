import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./report-button.scss";

const ReportButton = ({ onClick, isActive }: { onClick: () => void, isActive: boolean }) => {

  return (
    <button onClick={onClick} className={`report-button nav__buttons ${isActive ? "active" : ""}`}>
      <FontAwesomeIcon icon={faClock} />
    </button>
  );
}

export default ReportButton;