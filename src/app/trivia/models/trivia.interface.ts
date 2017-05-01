export interface Trivia {
    question: string;
    answers: Answer[];
}

export interface Answer {
    answerTitle: string;
    correct: boolean;
}