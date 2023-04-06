import "../../css/ToggleButton.css";

export const ToggleButton = ({
    label,
    isToggled,
    isHovered,
    handleToggle,
}: {
    label: string;
    isToggled: boolean;
    isHovered?: boolean;
    handleToggle: (isToggled: boolean) => void;
}) => {
    return (
        <>
            <input
                type="checkbox"
                id={`toggle-input`}
                defaultChecked={isToggled}
                onClick={() => handleToggle(!isToggled)}
                className="toggle-checkbox h-0 w-0 hidden"
            />
            <label
                className="toggle-label relative flex items-center justify-center cursor-pointer
         w-16 h-7 dark:bg-slate-600 bg-gray-400 rounded-3xl"
                htmlFor={`toggle-input`}
            >
                <span className="toggle-slider absolute top-0 left-0 w-7 h-7 rounded-3xl dark:bg-cyan-50 bg-gray-700" />
                <strong>{label}</strong>
            </label>
        </>
    );
};
