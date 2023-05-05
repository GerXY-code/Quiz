import { QuizResponse } from "@/interfaces/response/QuizResponse";
import { PageProps } from ".";

export type QuizProps = PageProps & {
    quiz: QuizResponse;
};
