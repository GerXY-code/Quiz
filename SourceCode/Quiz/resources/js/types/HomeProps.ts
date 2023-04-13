import { PageProps } from ".";
import { Quiz } from "./Quiz";

export type HomeProps = PageProps & {
    quizzes: Quiz[];
};
