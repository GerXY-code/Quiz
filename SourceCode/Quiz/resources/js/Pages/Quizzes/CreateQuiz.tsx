import Checkbox from "@/Components/Checkbox";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useState } from "react";

type AnswerInput = { answer: string; isCorrect: boolean };

export default function CreateQuiz({ auth }: PageProps) {
    const initialState: AnswerInput[] = [
        { answer: "", isCorrect: false },
        { answer: "", isCorrect: false },
    ];
    const [answers, setAnswers] = useState<AnswerInput[]>(initialState);
    function handleAnswerChange(value: string, idx: number) {
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[idx].answer = value;
            return updatedAnswers;
        });
    }
    function handleIsCorrectChange(idx: number, value: boolean) {
        setAnswers((prevAnswers) => {
            const updatedAnswers = [...prevAnswers];
            updatedAnswers[idx].isCorrect = value;
            return updatedAnswers;
        });
    }
    function addAnswer(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        setAnswers((prevAnswers) => {
            if (answers.length < 4) {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers.push({ answer: "", isCorrect: false });
                return updatedAnswers;
            }
            return prevAnswers;
        });
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <form className="text-gray-900 dark:text-gray-100">
                <div className="p-6 flex flex-col items-center mt-12 bg-white dark:bg-gray-800">
                    <div>
                        <input
                            className="w-96 h-48 bg-white dark:bg-gray-800"
                            type="text"
                            placeholder="Type your question here..."
                        ></input>
                    </div>
                    <div className="p-4 w-full flex justify-center items-center">
                        <div className="flex flex-row">
                            {answers.map((answer, idx) => (
                                <>
                                    <input
                                        key={idx}
                                        className="w-64 h-48 m-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
                                        onChange={(e) =>
                                            handleAnswerChange(
                                                e.target.value,
                                                idx
                                            )
                                        }
                                        placeholder="Type an answer here..."
                                    ></input>
                                    <Checkbox
                                        className="w-5 h-5 -ml-7 mt-2"
                                        onChange={(e) =>
                                            handleIsCorrectChange(
                                                idx,
                                                e.target.checked
                                            )
                                        }
                                    ></Checkbox>
                                </>
                            ))}
                        </div>
                        <button
                            className="ml-4 w-6 h-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full"
                            onClick={(e) => addAnswer(e)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
