export interface Answer {
    answerTitle: string;
    correct: boolean;
}

export interface Question {
    name: string;
    answers: Answer[];
}

export interface Trivia {
    triviaName: string;
    questions: Question[];
}

