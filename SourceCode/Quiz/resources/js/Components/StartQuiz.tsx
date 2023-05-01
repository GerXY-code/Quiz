import PrimaryButton from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function StartQuiz({
    title,
    category,
    setIsQuizStarted,
}: {
    title: string;
    category: string;
    setIsQuizStarted(isStarted: boolean): void;
}) {
    return (
        <div className="p-12 flex flex-col items-center">
            <h1>{title}</h1>
            <h1>{category}</h1>
            <div className="p-6">
                <Link
                    className="mx-6 inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md
                    font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest hover:bg-gray-700 dark:hover:bg-white
                    focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2
                    focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    href="/"
                >
                    Back
                </Link>
                <PrimaryButton
                    className="mx-6"
                    onClick={() => setIsQuizStarted(true)}
                >
                    Start quiz
                </PrimaryButton>
            </div>
        </div>
    );
}
