import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";
import { useState } from "react";

export default function Quiz({ quiz, auth }: { quiz: Quiz; auth: User }) {
    const [index, setIndex] = useState(0);
    function increaseIndex() {
        if (index == quiz.questions.length - 1) return;
        setIndex(index + 1);
    }
    return (
        <AuthenticatedLayout user={auth}>
            <div className="my-20">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg text-gray-900 dark:text-gray-100">
                        <div className="p-6">
                            <h1>{quiz.questions[index].question}</h1>
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
