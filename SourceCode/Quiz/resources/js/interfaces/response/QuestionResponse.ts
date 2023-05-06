import { Answer } from "../Answer";
import { Question } from "../Question";

export interface QuestionResponse extends Question {
    answer: Answer;
}