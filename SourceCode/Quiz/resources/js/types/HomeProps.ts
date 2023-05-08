import { PageProps } from ".";
import { Quiz } from "../interfaces/Quiz";
import { Category } from "./Category";

export type HomeProps = PageProps & {
    quizzes: Quiz[];
    categories: Category[];
};
