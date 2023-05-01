import { QuestionWithAnswer } from "./QuestionWithAnswer";

export interface Quiz {
    id?: number;
    title: string;
    category: string;
    quiz_cover?: string;
    questions: QuestionWithAnswer[];
    isPrivate: boolean;
}