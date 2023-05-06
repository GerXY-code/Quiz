import { QuestionRequest } from "./QuestionRequest";
import { Quiz } from "../Quiz";

export interface QuizRequest extends Quiz {
    questions: QuestionRequest[];
}