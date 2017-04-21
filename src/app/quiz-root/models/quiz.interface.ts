export interface Quiz {
    question: string; //required field with minum of 5 chars
    answers: Answer[];
}

export interface Answer {
    content: string; //required field
    correct: boolean;
}