import "./button-cta.scss";

const ButtonCta = ({ title, className, onClick }: { title: string, className?: string, onClick?: () => void }) => {
    return (
        <button className={`button-cta ${className}`} onClick={onClick}>
            {title}
        </button>
    );
}

export default ButtonCta; 