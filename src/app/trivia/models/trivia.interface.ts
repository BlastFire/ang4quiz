export interface Answer {
    id: number;
    answerTitle: string;
    correct: boolean;
}

export interface Question {
    id: number;
    name: string;
    answers: Answer[];
}

export interface Trivia {
    id: number;
    triviaName: string;
    questions: Question[];
}

