import { PageProps } from ".";
import { Quiz } from "./Quiz";

export type QuizProps = PageProps & {
    quiz: Quiz;
};
