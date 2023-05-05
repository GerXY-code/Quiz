import { QuestionRequest } from "@/interfaces/request/QuestionRequest";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";

export function QuestionList({
    questions,
    removeQuestion,
    setSelectedQuestionToEdit,
}: {
    questions: QuestionRequest[];
    removeQuestion: (index: number) => void;
    setSelectedQuestionToEdit: React.Dispatch<
        React.SetStateAction<QuestionRequest | undefined>
    >;
}) {
    return (
        <div className="mb-1">
            {questions.map((question, idx) => (
                <div className="flex flex-row" key={question.id + "div"}>
                    <p
                        className="m-2 w-64 h-8 rounded-lg flex items-center bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
                        key={question.id}
                    >
                        <span className="m-2">{idx + 1}.</span>
                        <span>{question.question}</span>
                    </p>
                    <EditButton
                        key={question.id + "edit"}
                        className="mx-2"
                        onClick={() => setSelectedQuestionToEdit(question)}
                    />
                    <RemoveButton
                        key={question.id + "remove"}
                        onClick={() => removeQuestion(idx)}
                    />
                </div>
            ))}
        </div>
    );
}
