export interface Quiz {
    id?: number;
    title: string;
    category: string;
    quiz_cover?: string;
    isPrivate: boolean;
    timeLimit: number;
}