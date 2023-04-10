import { Question } from "./Question";

export type Quiz = {
    id: number;
    title:string;
    category: string;
    questions: Question[];
    is_private:boolean;
}