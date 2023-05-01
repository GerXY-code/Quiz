import { PageProps } from ".";
import { Quiz } from "../interfaces/Quiz";

export type HomeProps = PageProps & {
    quizzes: Quiz[];
};
