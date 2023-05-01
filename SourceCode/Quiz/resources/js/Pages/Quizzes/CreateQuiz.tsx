import CategorySelector from "@/Components/CategorySelector";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { useReducer, useState } from "react";
import AddQuestion from "../../Components/AddQuestion";
import { CreatedQuestion } from "@/interfaces/CreatedQuestion";
import { CreatedQuiz } from "@/interfaces/CreatedQuiz";
import RemoveButton from "@/Components/RemoveButton";
import AddButton from "@/Components/AddButton";
import PrimaryButton from "@/Components/PrimaryButton";
import { router } from "@inertiajs/react";

enum QuizActionType {
    SET_CATEGORY,
    UPDATE_TITLE,
    ADD_QUESTION,
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
          question: CreatedQuestion;
      }
    | {
          type: QuizActionType.REMOVE_QUESTION;
          index: number;
      };

function reducer(state: CreatedQuiz, action: QuizAction): CreatedQuiz {
    switch (action.type) {
        case QuizActionType.SET_CATEGORY: {
            const { category } = action;
            return { ...state, category };
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
        case QuizActionType.REMOVE_QUESTION: {
            const reducedQuestions = state.questions.filter(
                (q, index) => index !== action.index
            );
            return { ...state, questions: reducedQuestions };
        }
        default:
            return state;
    }
}

export default function CreateQuiz({ auth }: PageProps) {
    // TODO: change this
    const categories = ["Math", "Biology", "Sports", "Literature"];
    const initialState: CreatedQuiz = {
        title: "",
        category: "",
        questions: [],
        isPrivate: false,
    };
    const [showAddQuestion, setShowAddQuestion] = useState(false);
    const [quiz, dispatch] = useReducer(reducer, initialState);

    function handleSaveQuestion(question: CreatedQuestion): void {
        dispatch({ type: QuizActionType.ADD_QUESTION, question: question });
        setShowAddQuestion(!showAddQuestion);
    }

    function handleRemoveQuestion(index: number): void {
        dispatch({ type: QuizActionType.REMOVE_QUESTION, index: index });
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

    return (
        <AuthenticatedLayout user={auth.user}>
            {showAddQuestion ? (
                <AddQuestion saveQuestion={handleSaveQuestion} />
            ) : (
                <div className="flex flex-col items-center mt-12 max-w-7xl mx-auto sm:px-6 lg:px-8 text-black dark:text-white bg-white dark:bg-gray-800">
                    <div className="flex items-center m-6">
                        <label className="mr-4">Category: </label>
                        <CategorySelector
                            onSelect={(e) =>
                                dispatch({
                                    type: QuizActionType.SET_CATEGORY,
                                    category: e,
                                })
                            }
                            categories={categories}
                            selectedCategory={quiz.category}
                        />
                    </div>
                    <div className="flex items-center mb-6">
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
                        <div className="mb-1">
                            {quiz.questions.map((question, idx) => (
                                <div className="flex flex-row">
                                    <p
                                        className="m-2 w-64 h-8 rounded-lg flex items-center bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
                                        key={question.question + idx}
                                    >
                                        <span className="m-2">{idx + 1}.</span>
                                        <span>{question.question}</span>
                                    </p>
                                    <RemoveButton
                                        onClick={() =>
                                            handleRemoveQuestion(idx)
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                    <div>
                        <AddButton
                            className="mb-4 ml-4 w-6 h-6 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-full flex justify-center align-center"
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
            )}
        </AuthenticatedLayout>
    );
}
