import { Question } from "./Question";

export type Quiz = {
    id?: number;
    title: string;
    category: string;
    quiz_cover?: string;
    questions: Question[];
    isPrivate: boolean;
}