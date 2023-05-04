import { Quiz } from "../Quiz";
import { QuestionResponse } from "./QuestionResponse";

export interface QuizResponse extends Quiz {
    questions: QuestionResponse[];
}