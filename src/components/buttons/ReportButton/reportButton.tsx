import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const ReportButton = () => {
    return (
        <button>
            <FontAwesomeIcon icon={faClock} />
        </button>
    );
}

export default ReportButton;