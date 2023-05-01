import { CreatedQuestion } from "./CreatedQuestion";
import { Quiz } from "./Quiz";

export interface CreatedQuiz extends Quiz {
    questions: CreatedQuestion[];
}