import { QuestionRequest } from "@/interfaces/request/QuestionRequest";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";
import {
    DragDropContext,
    Draggable,
    DropResult,
    Droppable,
} from "react-beautiful-dnd";

export function QuestionList({
    questions,
    removeQuestion,
    setSelectedQuestionToEdit,
    onDragEnd,
}: {
    questions: QuestionRequest[];
    removeQuestion: (index: number) => void;
    setSelectedQuestionToEdit: React.Dispatch<
        React.SetStateAction<QuestionRequest | undefined>
    >;
    onDragEnd: (result: DropResult) => void;
}) {
    return (
        <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
            <Droppable droppableId="questions">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {questions.map((question, idx) => (
                            <Draggable
                                draggableId={question.id!.toString()}
                                index={idx}
                                key={question.id}
                            >
                                {(provided) => (
                                    <div
                                        className="flex flex-row items-center questions"
                                        key={question.id + "div"}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
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
                                                d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                            />
                                        </svg>

                                        <p
                                            className="m-2 w-64 h-8 rounded-lg flex items-center bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800"
                                            key={question.id}
                                        >
                                            <span className="m-2">
                                                {idx + 1}.
                                            </span>
                                            <span>{question.question}</span>
                                        </p>
                                        <EditButton
                                            key={question.id + "edit"}
                                            className="mx-2"
                                            onClick={() =>
                                                setSelectedQuestionToEdit(
                                                    question
                                                )
                                            }
                                        />
                                        <RemoveButton
                                            key={question.id + "remove"}
                                            onClick={() => removeQuestion(idx)}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
