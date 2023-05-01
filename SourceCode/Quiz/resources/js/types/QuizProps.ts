import { PageProps } from ".";
import { Quiz } from "../interfaces/Quiz";

export type QuizProps = PageProps & {
    quiz: Quiz;
};
