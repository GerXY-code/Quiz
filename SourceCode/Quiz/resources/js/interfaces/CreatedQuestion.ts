import { CreatedAnswer as CreatedAnswer } from "./CreatedAnswer";
import { Question } from "./Question";

export interface CreatedQuestion extends Question {
    answers: CreatedAnswer[];
}