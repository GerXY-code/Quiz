import Checkbox from "@/Components/Checkbox";
import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PrimaryButton from "./PrimaryButton";
import { Question } from "@/types/Question";
import { AnswerInput } from "@/types/AnswerInput";

enum QuestionActionType {
    ADD_ANSWER,
    UPDATE_ANSWER,
    REMOVE_ANSWER,
}

type QuestionAction =
    | {
          type: QuestionActionType.UPDATE_ANSWER;
          index: number;
          partialValue: Partial<AnswerInput>;
      }
    | { type: QuestionActionType.ADD_ANSWER; answer: AnswerInput }
    | { type: QuestionActionType.REMOVE_ANSWER; index: number };

function reducer(state: AnswerInput[], action: QuestionAction): AnswerInput[] {
    switch (action.type) {
        case QuestionActionType.UPDATE_ANSWER: {
            const { index, partialValue } = action;
            const updatedItem = { ...state[index], ...partialValue };
            return [
                ...state.slice(0, index),
                updatedItem,
                ...state.slice(index + 1),
            ];
        }
        case QuestionActionType.ADD_ANSWER: {
            if (state.length < 4) {
                const { answer } = action;
                return [...state, answer];
            }
            return state;
        }
        case QuestionActionType.REMOVE_ANSWER: {
            if (state.length > 2) {
                const { index } = action;
                return [...state.slice(0, index), ...state.slice(index + 1)];
            }
            return state;
        }
        default:
            return state;
    }
}

export default function AddQuestion({
    saveQuestion,
}: {
    saveQuestion: (question: Question) => void;
}) {
    const [question, setQuestion] = useState("");
    const initialState: AnswerInput[] = [
        { id: uuidv4(), answer: "", isCorrect: false },
        { id: uuidv4(), answer: "", isCorrect: false },
    ];

    const [answers, dispatch] = useReducer(reducer, initialState);

    function handleAddAnswer(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        e.preventDefault();
        dispatch({
            type: QuestionActionType.ADD_ANSWER,
            answer: { id: uuidv4(), answer: "", isCorrect: false },
        });
    }

    function handleRemoveAnswer(
        e: React.MouseEvent<HTMLButtonElement>,
        index: number
    ) {
        e.preventDefault();
        dispatch({
            type: QuestionActionType.REMOVE_ANSWER,
            index: index,
        });
    }
    return (
        <form className="text-gray-900 dark:text-gray-100">
            <div className="p-6 flex flex-col items-center mt-12 bg-white dark:bg-gray-800">
                <div>
                    <input
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-96 h-48 bg-gray-200 dark:bg-gray-700"
                        type="text"
                        placeholder="Type your question here..."
                    ></input>
                </div>
                <div className="p-4 w-full flex justify-center items-center">
                    <div className="flex flex-row">
                        {answers.map((answer, idx) => (
                            <>
                                <input
                                    key={answer.id}
                                    className="w-64 h-48 m-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
                                    onChange={(e) => {
                                        dispatch({
                                            type: QuestionActionType.UPDATE_ANSWER,
                                            index: idx,
                                            partialValue: {
                                                answer: e.target.value,
                                            },
                                        });
                                    }}
                                    placeholder="Type an answer here..."
                                ></input>
                                <Checkbox
                                    key={answer.id + "checkbox"}
                                    className="w-5 h-5 -ml-7 mt-2"
                                    onChange={(e) => {
                                        dispatch({
                                            type: QuestionActionType.UPDATE_ANSWER,
                                            index: idx,
                                            partialValue: {
                                                isCorrect: e.target.checked,
                                            },
                                        });
                                    }}
                                ></Checkbox>
                                <button
                                    onClick={(e) => handleRemoveAnswer(e, idx)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </>
                        ))}
                    </div>
                    <button
                        className="ml-4 w-6 h-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full"
                        onClick={(e) => handleAddAnswer(e)}
                    >
                        +
                    </button>
                </div>
                <PrimaryButton
                    onClick={() => saveQuestion({ question, answers })}
                >
                    Save
                </PrimaryButton>
            </div>
        </form>
    );
}
