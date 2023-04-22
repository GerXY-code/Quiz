import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { HomeProps } from "@/types/HomeProps";
import { Link } from "@inertiajs/react";

export default function Home({ auth, quizzes }: HomeProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-5 text-gray-900 dark:text-gray-100 flex justify-center">
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                                {quizzes.map((quiz) => (
                                    <Link
                                        key={quiz.id}
                                        href={`/quiz/${quiz.id}`}
                                        className="m-5 w-56 h-40 flex justify-center items-center px-4 py-2 bg-gray-800 dark:bg-gray-200
                                        border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase tracking-widest
                                        hover:bg-gray-700 dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-gray-900 dark:active:bg-gray-300
                                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"
                                    >
                                        {quiz.title}
                                        <img src=".storage/app/public/uploads/math.png"></img>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
