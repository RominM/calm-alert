import "./button-cta.scss";

const ButtonCta = ({ title, className }: { title: string, className?: string }) => {
    return (
        <button className={`button-cta ${className}`}>
            {title}
        </button>
    );
}

export default ButtonCta; 