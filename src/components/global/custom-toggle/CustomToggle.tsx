import "./custom-toggle.scss";
import { useRef } from "react";
  
interface CustomToggleProps {
    label: string;
    checked: boolean;
    onChange?: (checked: boolean) => void;
}

const CustomToggle = ({ label, checked, onChange }: CustomToggleProps) => {
  const toggleInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const toggleChecked = () => {
    onChange?.(!checked);
  };

  return (
    <div className="switch">
      <span>
        <input
          type="checkbox"
          id="toggleInput"
          ref={toggleInputRef}
          checked={checked}
          onChange={handleChange}
        />
        <button className="slider" type="button" onClick={toggleChecked}></button>
      </span>
      <label htmlFor="toggleInput" onClick={toggleChecked}>
        {label}
      </label>
    </div>
  );
};


export default CustomToggle