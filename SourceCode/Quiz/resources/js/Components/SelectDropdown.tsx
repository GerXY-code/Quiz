import Dropdown from "./Dropdown";

export default function SelectDropdown({
    values,
    onSelect,
    selectedValue,
    placeholder,
    icon,
}: {
    values: string[];
    onSelect: (value: string) => void;
    selectedValue: string;
    placeholder?: string;
    icon?: boolean;
}) {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                {
                    icon && <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
</svg>

                    </div>
                }
                { !icon && <span className="inline-flex rounded-md">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4
                                    font-medium rounded-md text-gray-200 dark:text-gray-800 bg-gray-800 dark:bg-gray-200
                                    hover:text-gray-300 dark:hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                >
                                    {selectedValue.length < 1 ? placeholder : selectedValue}
                                    <svg
                                        className="ml-2 -mr-0.5 h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>}
                
            </Dropdown.Trigger>
            <Dropdown.Content>
                {values.map((value) => {
                    return (
                        <button
                            key={value}
                            onClick={() => onSelect(value)}
                            className="pt-1 pb-1 block w-full hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-gray-200 dark:hover:text-gray-800"
                        >
                            {value}
                        </button>
                    );
                })}
            </Dropdown.Content>
        </Dropdown>
    );
}
