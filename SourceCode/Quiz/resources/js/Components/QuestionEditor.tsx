import Checkbox from "@/Components/Checkbox";
import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PrimaryButton from "./PrimaryButton";
import RemoveButton from "./RemoveButton";
import AddButton from "./AddButton";
import { AnswerRequest } from "@/interfaces/request/AnswerRequest";
import { QuestionRequest } from "@/interfaces/request/QuestionRequest";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { User } from "@/types";

enum QuestionActionType {
    ADD_ANSWER,
    UPDATE_ANSWER,
    REMOVE_ANSWER,
}

type QuestionAction =
    | {
          type: QuestionActionType.UPDATE_ANSWER;
          index: number;
          partialValue: Partial<AnswerRequest>;
      }
    | { type: QuestionActionType.ADD_ANSWER; answer: AnswerRequest }
    | { type: QuestionActionType.REMOVE_ANSWER; index: number };

function reducer(
    state: AnswerRequest[],
    action: QuestionAction
): AnswerRequest[] {
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
                const filteredQuestions = state.filter(
                    (q, index) => index !== action.index
                );
                return filteredQuestions;
            }
            return state;
        }
        default:
            return state;
    }
}

export default function QuestionEditor({
    onSaveClick,
    user,
    previousQuestionState,
}: {
    onSaveClick: (question: QuestionRequest) => void;
    user: User;
    previousQuestionState?: QuestionRequest;
}) {
    const [question, setQuestion] = useState(
        previousQuestionState ? previousQuestionState.question : ""
    );
    const initialState: AnswerRequest[] = previousQuestionState
        ? previousQuestionState.answers
        : [
              { id: uuidv4(), answer: "", isCorrect: false },
              { id: uuidv4(), answer: "", isCorrect: false },
          ];

    const [answers, dispatch] = useReducer(reducer, initialState);

    function handleAddAnswer(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        dispatch({
            type: QuestionActionType.ADD_ANSWER,
            answer: { id: uuidv4(), answer: "", isCorrect: false },
        });
    }

    function handleRemoveAnswer(e: React.MouseEvent<Element>, index: number) {
        e.preventDefault();
        dispatch({
            type: QuestionActionType.REMOVE_ANSWER,
            index: index,
        });
    }

    function handleSaveQuestion(e: React.MouseEvent<Element>) {
        e.preventDefault();
        if (!isQuestionValid()) {
            return;
        }
        onSaveClick!({
            id: previousQuestionState?.id ?? uuidv4(),
            question,
            answers,
        });
    }

    function isCheckBoxDisabled(idx: number): boolean {
        const isCorrectCount = answers.filter(
            (answer) => answer.isCorrect === true
        ).length;
        return (
            isCorrectCount === answers.length - 1 &&
            answers[idx].isCorrect === false
        );
    }

    function isQuestionValid(): boolean {
        return (
            question.length > 1 &&
            answers.filter((answer) => answer.answer.length < 1).length === 0 &&
            answers.filter((answer) => answer.isCorrect === true).length > 0
        );
    }
    return (
        <AuthenticatedLayout user={user}>
            <div className="flex flex-col items-center mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8 text-black dark:text-white bg-white dark:bg-gray-800">
                <form className="text-gray-900 dark:text-gray-100">
                    <div className="p-6 flex flex-col items-center justify-center mt-12 bg-white dark:bg-gray-800">
                        <div>
                            <input
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                className="w-96 h-48 bg-gray-200 dark:bg-gray-700"
                                type="text"
                                placeholder="Type your question here..."
                            ></input>
                        </div>
                        <div className="p-4 w-full flex justify-center items-center">
                            <div className="flex flex-row">
                                {answers.map((answer, idx) => (
                                    <div
                                        className="flex flex-col"
                                        key={answer.id + "outer-div"}
                                    >
                                        <div key={answer.id + "inner-div"}>
                                            <input
                                                key={answer.id}
                                                value={answer.answer}
                                                className="w-64 h-48 m-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: QuestionActionType.UPDATE_ANSWER,
                                                        index: idx,
                                                        partialValue: {
                                                            answer: e.target
                                                                .value,
                                                        },
                                                    });
                                                }}
                                                placeholder={
                                                    "Type an answer here..."
                                                }
                                            ></input>
                                            <Checkbox
                                                checked={answer.isCorrect}
                                                key={answer.id + "checkbox"}
                                                className="w-5 h-5"
                                                disabled={isCheckBoxDisabled(
                                                    idx
                                                )}
                                                onChange={(e) => {
                                                    dispatch({
                                                        type: QuestionActionType.UPDATE_ANSWER,
                                                        index: idx,
                                                        partialValue: {
                                                            isCorrect:
                                                                e.target
                                                                    .checked,
                                                        },
                                                    });
                                                }}
                                            ></Checkbox>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <RemoveButton
                                                key={answer.id + "remove"}
                                                onClick={(e) =>
                                                    handleRemoveAnswer(e, idx)
                                                }
                                            ></RemoveButton>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <AddButton
                                className="mb-4 ml-4 w-6 h-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full"
                                onClick={(e) => handleAddAnswer(e)}
                            />
                        </div>
                        <PrimaryButton onClick={(e) => handleSaveQuestion(e)}>
                            Save
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}