import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./title.scss";

const Title = ({title, icon}: {title: string, icon?: IconProp}) => {
    return (
        <h2 className="title">
            {icon && <FontAwesomeIcon icon={icon} />}
            {title}
        </h2>
    );
}

export default Title;