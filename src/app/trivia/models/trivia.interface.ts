export interface trivia {
    question: string;
    answers: Answer[];
}

export interface Answer {
    answerTitle: string;
    correct: boolean;
}