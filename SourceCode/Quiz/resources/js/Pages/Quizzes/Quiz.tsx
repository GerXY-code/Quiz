import QuizzesLayout from "@/Layouts/QuizzesLayout";
import { Head } from "@inertiajs/react";

export default function Quiz({ quizzes }: { quizzes: Quiz[] }) {
    return (
        <QuizzesLayout quizzes={quizzes}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100"></div>
                    </div>
                </div>
            </div>
        </QuizzesLayout>
    );
}
