export interface Quiz {
    question: string; //required field with minum of 5 chars
    answers: string[];
}

export interface Answer {
    answerTitle: string; //required field
    correct: boolean;
}