import Dropdown from "./Dropdown";

export default function CategorySelector({
    categories,
    onSelect,
    selectedCategory,
}: {
    categories: string[];
    onSelect: (category: string) => void;
    selectedCategory: string;
}) {
    return (
        <Dropdown>
            <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4
                        font-medium rounded-md text-gray-200 dark:text-gray-800 bg-gray-800 dark:bg-gray-200
                        hover:text-gray-300 dark:hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                    >
                        {selectedCategory.length < 1
                            ? "Select a category"
                            : selectedCategory}
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
                </span>
            </Dropdown.Trigger>
            <Dropdown.Content>
                {categories.map((category) => {
                    return (
                        <button
                            key={category}
                            onClick={() => onSelect(category)}
                            className="pt-1 pb-1 block w-full hover:bg-gray-800 dark:hover:bg-gray-200 hover:text-gray-200 dark:hover:text-gray-800"
                        >
                            {category}
                        </button>
                    );
                })}
            </Dropdown.Content>
        </Dropdown>
    );
}
