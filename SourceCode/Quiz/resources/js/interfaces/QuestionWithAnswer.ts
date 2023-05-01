import { Answer } from "./Answer";
import { Question } from "./Question";

export interface QuestionWithAnswer extends Question {
    answer: Answer;
}