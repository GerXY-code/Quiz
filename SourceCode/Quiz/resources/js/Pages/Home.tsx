import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { HomeProps } from "@/types/HomeProps";

export default function Home({ auth, quizzes }: HomeProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-4 m-2 flex items-center ">
                                {quizzes.map((quiz) => (
                                    <PrimaryButton className="m-2 w-64 h-48">
                                        <div className="mx-auto">
                                            <p>{quiz.title}</p>
                                        </div>
                                    </PrimaryButton>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
