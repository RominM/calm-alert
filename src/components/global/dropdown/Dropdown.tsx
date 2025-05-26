interface DropdownProps {
    title: string;
    options: string[];
    selectedOption: string;
    setSelectedOption: (option: string) => void;
}

const Dropdown = ({ title, options, selectedOption, setSelectedOption }: DropdownProps) => {
    return (
        <div>
            <p>{title}</p>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown