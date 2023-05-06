import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { ChangeEvent, useReducer, useState } from "react";
import QuestionEditor from "../../Components/QuestionEditor";
import AddButton from "@/Components/AddButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import { QuestionRequest } from "@/interfaces/request/QuestionRequest";
import { QuizRequest } from "@/interfaces/request/QuizRequest";
import { QuestionList } from "@/Components/QuestionList";
import SelectDropdown from "@/Components/SelectDropdown";
import { DropResult } from "react-beautiful-dnd";

enum QuizActionType {
    SET_CATEGORY,
    SET_IS_PRIVATE,
    SET_TIME_LIMIT,
    UPDATE_TITLE,
    ADD_QUESTION,
    EDIT_QUESTION,
    REORDER_QUESTIONS,
    REMOVE_QUESTION,
}

type QuizAction =
    | {
          type: QuizActionType.SET_CATEGORY;
          category: string;
      }
    | {
          type: QuizActionType.UPDATE_TITLE;
          title: string;
      }
    | {
          type: QuizActionType.ADD_QUESTION;
          question: QuestionRequest;
      }
    | {
          type: QuizActionType.EDIT_QUESTION;
          question: QuestionRequest;
      }
    | {
          type: QuizActionType.REMOVE_QUESTION;
          index: number;
      }
    | {
          type: QuizActionType.SET_IS_PRIVATE;
          checked: boolean;
      }
    | {
          type: QuizActionType.SET_TIME_LIMIT;
          timeLimit: number;
      }
    | {
          type: QuizActionType.REORDER_QUESTIONS;
          sourceIndex: number;
          destinationIndex: number;
      };

const timeLimitsInSecondsToChooseFrom = [
    5, 10, 15, 20, 30, 45, 60, 90, 120, 180, 240, 300,
];

function reducer(state: QuizRequest, action: QuizAction): QuizRequest {
    switch (action.type) {
        case QuizActionType.SET_CATEGORY: {
            const { category } = action;
            return { ...state, category };
        }
        case QuizActionType.SET_IS_PRIVATE: {
            const { checked } = action;
            return { ...state, isPrivate: checked };
        }
        case QuizActionType.SET_TIME_LIMIT: {
            const { timeLimit } = action;
            return { ...state, timeLimit };
        }
        case QuizActionType.UPDATE_TITLE: {
            const { title } = action;
            return { ...state, title };
        }
        case QuizActionType.ADD_QUESTION:
            return {
                ...state,
                questions: state.questions.concat(action.question),
            };
        case QuizActionType.EDIT_QUESTION: {
            const { question } = action;
            const updatedQuestions = state.questions.map((q) => {
                if (q.id === question.id) {
                    return question;
                }
                return q;
            });

            return { ...state, questions: updatedQuestions };
        }
        case QuizActionType.REMOVE_QUESTION: {
            const reducedQuestions = state.questions.filter(
                (q, index) => index !== action.index
            );
            return { ...state, questions: reducedQuestions };
        }
        case QuizActionType.REORDER_QUESTIONS: {
            const updatedQuestions = [...state.questions];
            const [reorderedQuestion] = updatedQuestions.splice(
                action.sourceIndex,
                1
            );
            updatedQuestions.splice(
                action.destinationIndex,
                0,
                reorderedQuestion
            );
            return { ...state, questions: updatedQuestions };
        }
        default:
            return state;
    }
}

export default function QuizEditor({ auth }: PageProps) {
    const categories = ["Math", "Biology", "Sports", "Literature"];
    const initialState: QuizRequest = {
        title: "",
        category: "",
        questions: [],
        isPrivate: false,
        timeLimit: timeLimitsInSecondsToChooseFrom[1],
    };
    const [showAddQuestion, setShowAddQuestion] = useState(false);
    const [selectedQuestionToEdit, setSelectedQuestionToEdit] = useState<
        QuestionRequest | undefined
    >();
    const [quiz, dispatch] = useReducer(reducer, initialState);

    function handleSaveQuestion(question: QuestionRequest): void {
        dispatch({ type: QuizActionType.ADD_QUESTION, question: question });
        setShowAddQuestion(!showAddQuestion);
    }

    function handleEditQuestion(question: QuestionRequest): void {
        dispatch({
            type: QuizActionType.EDIT_QUESTION,
            question: question,
        });
        setSelectedQuestionToEdit(undefined);
    }

    function handleRemoveQuestion(index: number): void {
        dispatch({ type: QuizActionType.REMOVE_QUESTION, index: index });
    }

    function handleDragEnd(result: DropResult): void {
        if (!result.destination) return;
        dispatch({
            type: QuizActionType.REORDER_QUESTIONS,
            sourceIndex: result.source.index,
            destinationIndex: result.destination.index,
        });
    }

    function handleCreateQuiz(): void {
        if (
            quiz.category.length < 1 &&
            quiz.title.length < 1 &&
            quiz.questions.length < 1
        )
            return;
        router.post("/quiz/create", quiz);
    }

    if (showAddQuestion) {
        return (
            <QuestionEditor onSaveClick={handleSaveQuestion} user={auth.user} />
        );
    }

    if (selectedQuestionToEdit) {
        return (
            <QuestionEditor
                previousQuestionState={selectedQuestionToEdit}
                onSaveClick={handleEditQuestion}
                user={auth.user}
            />
        );
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="flex flex-col items-center mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8 text-black dark:text-white bg-white dark:bg-gray-800">
                <div className="flex items-center m-6">
                    <label className="mr-4">Category: </label>
                    <SelectDropdown
                        onSelect={(e) =>
                            dispatch({
                                type: QuizActionType.SET_CATEGORY,
                                category: e,
                            })
                        }
                        placeholder="Select a category..."
                        values={categories}
                        selectedValue={quiz.category}
                    />
                </div>
                <div className="flex flex-row">
                    <label htmlFor="timeLimit" className="mr-4">
                        Time limit (s):
                    </label>
                    <SelectDropdown
                        selectedValue={quiz.timeLimit.toString()}
                        values={timeLimitsInSecondsToChooseFrom.map(String)}
                        onSelect={(e) =>
                            dispatch({
                                type: QuizActionType.SET_TIME_LIMIT,
                                timeLimit: +e,
                            })
                        }
                    />
                </div>
                <div className="flex items-center m-6">
                    <label htmlFor="is-private-checkbox" className="mr-4">
                        Is quiz private?
                    </label>
                    <Checkbox
                        id="is-private-checkbox"
                        onChange={(e) =>
                            dispatch({
                                type: QuizActionType.SET_IS_PRIVATE,
                                checked: e.target.checked,
                            })
                        }
                    />
                </div>
                <div
                    className="flex
                     items-center mb-6"
                >
                    <label htmlFor="title" className="mr-4">
                        Title:
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={quiz.title}
                        className="text-black"
                        placeholder="Type a quiz title here..."
                        onChange={(e) =>
                            dispatch({
                                type: QuizActionType.UPDATE_TITLE,
                                title: e.target.value,
                            })
                        }
                    ></input>
                </div>
                <div>
                    <p>Questions: </p>
                </div>
                {quiz.questions.length > 0 && (
                    <QuestionList
                        onDragEnd={handleDragEnd}
                        questions={quiz.questions}
                        removeQuestion={handleRemoveQuestion}
                        setSelectedQuestionToEdit={setSelectedQuestionToEdit}
                    />
                )}
                <div>
                    <AddButton
                        className="my-4 ml-4 w-6 h-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full flex justify-center align-center"
                        onClick={() => setShowAddQuestion(!showAddQuestion)}
                    />
                </div>
                <div>
                    <PrimaryButton
                        className="mt-2 mb-6"
                        onClick={handleCreateQuiz}
                    >
                        Create quiz
                    </PrimaryButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
