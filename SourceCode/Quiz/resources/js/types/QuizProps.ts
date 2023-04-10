import { User } from ".";
import { Quiz } from "./Quiz";

export type QuizProps = {
    auth: { user: User };
    quiz: Quiz;
};