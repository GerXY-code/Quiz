import { AnswerRequest } from "./AnswerRequest";
import { Question } from "../Question";

export interface QuestionRequest extends Question {
    answers: AnswerRequest[];
}