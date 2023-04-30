import { Answer } from "./Answer";
import { AnswerInput } from "./AnswerInput";

export type Question = {
    id?: number;
    question: string;
    answers: Answer | AnswerInput[];
}