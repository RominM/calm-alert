import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./report-button.scss";

const ReportButton = () => {
    return (
        <button className="report-button">
            <FontAwesomeIcon icon={faClock} />
        </button>
    );
}

export default ReportButton;