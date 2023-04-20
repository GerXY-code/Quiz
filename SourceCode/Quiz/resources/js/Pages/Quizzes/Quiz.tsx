import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { QuizProps } from "@/types/QuizProps";
import { useState } from "react";

export default function Quiz({ auth, quiz }: QuizProps) {
    const [index, setIndex] = useState(0);
    function increaseIndex() {
        if (index == quiz.questions.length - 1) return;
        setIndex(index + 1);
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="my-20">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100">
                        <div className="p-6">
                            <h1>{quiz.questions[index].question}</h1>
                            <h1>{quiz.title}</h1>
                            <h1>{quiz.category}</h1>
                            <h1>{quiz.is_private}</h1>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-2">
                                {quiz.questions[index].answer.answers.map(
                                    (ans) => (
                                        <PrimaryButton
                                            key={ans}
                                            className="m-1"
                                            onClick={() => increaseIndex()}
                                        >
                                            {ans}
                                        </PrimaryButton>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
